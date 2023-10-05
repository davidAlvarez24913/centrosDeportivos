import {
  Reservation,
  Service,
  SportCenter,
  User,
} from "../../db/TypeOrm/Entities";
import {
  FireStoreReservation,
  createFirestoreReservation,
  deleteFirestoreReservation,
  listReservations,
} from "../../db/Firebase/Firestore/Reservation";
import { mergeReservations } from "../utils";
import { GraphQLError } from "graphql";

export const reservationResolvers = {
  Query: {
    reservationCount: async () => (await Reservation.find()).length,
    allReservations: async () => {
      const reservationsNoSQL =
        (await listReservations()) as FireStoreReservation[];
      const reservationsSQL = await Reservation.find({
        relations: { user: true, service: true },
      });
      const mergedReservations = mergeReservations(
        reservationsSQL,
        reservationsNoSQL
      );
      const result = mergedReservations.map((reservation) => {
        return {
          reservation: {
            ...reservation,
            userId: reservation.user.userId,
            serviceId: reservation.service.serviceId,
          },
          serviceName: reservation.service.name,
          userName: reservation.user.name,
        };
      });
      return result;
    },

    findReservation: async (root: any, args: any) => {
      const { id } = args;
      return await Reservation.findOneBy({ reservationId: id });
    },
    getReservationsByDate: async (root: any, { date, serviceId }: any) => {
      const reservationsSQL = await Reservation.find({
        where: { date: date, service: { serviceId: serviceId } },
        relations: { user: true, service: true },
      });

      const reservationsNoSQL = await listReservations();

      const mergedReservations = mergeReservations(
        reservationsSQL,
        reservationsNoSQL as FireStoreReservation[]
      );
      const result = mergedReservations.map((reservation) => {
        return {
          ...reservation,
          userId: reservation.user.userId,
          serviceId: reservation.service.serviceId,
        };
      });
      return result;
    },
  },

  Mutation: {
    //SC ==> SportCenter
    createReservationSC: async (root: any, { input }: any) => {
      const {
        date,
        reservationPrice,
        userId,
        paymentId,
        serviceId,
        image,
        rangeHour,
      } = input;
      const userApp = await User.findOneBy({
        userId: userId,
      });
      const userSC = await SportCenter.findOneBy({
        sportCenterId: userId,
      });

      // Control data when SportCenter make it booking
      const state = true;
      const imageAux = "";
      const paymentIdAux = "Generado por admin";
      const service = await Service.findOneBy({
        serviceId: serviceId,
      });
      if (userApp && userSC && service) {
        const reservationSQL = await Reservation.insert({
          state: state,
          date,
          paymentId: paymentIdAux,
          reservationPrice,
          user: userId,
          service: serviceId,
        });
        await createFirestoreReservation({
          reservationId: reservationSQL.identifiers[0].reservationId,
          image: imageAux,
          rangeHour: rangeHour,
        });
        return {
          ...input,
          state: state,
          reservationId: reservationSQL.identifiers[0].reservationId,
        };
      } else {
        // delete reservation if firestoreservation failed
        await SportCenter.delete({ sportCenterId: input.userId });

        throw new GraphQLError("No se pudo realizar la reserva!", {
          extensions: {
            code: "ERROR_RESERVATION",
            argumentName: "Reservation: Inspect exits user or request failed",
          },
        });
      }
    },
    //SC ==> SportCenter
    createReservationUser: async (root: any, { input }: any) => {
      const {
        date,
        reservationPrice,
        userId,
        paymentId,
        serviceId,
        image,
        rangeHour,
      } = input;
      const userApp = await User.findOneBy({
        userId: userId,
      });
      const userSC = await SportCenter.findOneBy({
        sportCenterId: userId,
      });

      const service = await Service.findOneBy({
        serviceId: serviceId,
      });
      if (userApp && userSC && service) {
        const reservationSQL = await Reservation.insert({
          state: true,
          date,
          paymentId,
          reservationPrice,
          user: userId,
          service: serviceId,
        });
        await createFirestoreReservation({
          reservationId: reservationSQL.identifiers[0].reservationId,
          image,
          rangeHour: rangeHour,
        });
        return {
          ...input,
          state: true,
          reservationId: reservationSQL.identifiers[0].reservationId,
        };
      } else {
        // delete reservation if firestoreservation failed
        await SportCenter.delete({ sportCenterId: input.userId });

        throw new GraphQLError("No se pudo realizar la reserva!", {
          extensions: {
            code: "ERROR_RESERVATION",
            argumentName: "Reservation: Inspect exits user or request failed",
          },
        });
      }
    },
    deleteReservation: async (
      root: any,
      { reservationId }: { reservationId: string }
    ) => {
      try {
        const existsId = await Reservation.findOneBy({
          reservationId: Number(reservationId),
        });
        if (existsId) {
          await Reservation.delete(Number(reservationId));
          await deleteFirestoreReservation(reservationId);
          return {
            status: "Ok",
            message: "Reservacion eliminada/cancelada",
          };
        } else {
          return {
            status: "Failed",
            message: `No existe la reservacion con el id ${reservationId}`,
          };
        }
      } catch (error) {
        return {
          status: "Failed",
          message: `No se puede eliminar: ${JSON.stringify(error)}`,
        };
      }
    },
  },
};
