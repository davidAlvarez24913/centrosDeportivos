import { Reservation, Service, User } from "../../db/TypeOrm/Entities";
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
          ...reservation,
          userId: reservation.user.userId,
          serviceId: reservation.service.serviceId,
        };
      });
      return result;
    },
    findReservation: async (root: any, args: any) => {
      const { id } = args;
      return await Reservation.findOneBy({ reservationId: id });
    },
  },

  Mutation: {
    createReservation: async (root: any, { input }: any) => {
      const {
        date,
        reservationPrice,
        userId,
        paymentId,
        serviceId,
        paymentPhoto,
        rangeHour,
      } = input;
      // const user = await User.findOneBy({
      //   userId: userId,
      // });
      const service = await Service.findOneBy({
        serviceId: serviceId,
      });
      if (service) {
        const reservationSQL = await Reservation.insert({
          state: true,
          date,
          paymentId: paymentId == undefined ? "" : paymentId,
          reservationPrice,
          user: userId,
          service: serviceId,
        });
        const reservationNoSQL = await createFirestoreReservation({
          reservationId: reservationSQL.identifiers[0].reservationId,
          paymentPhoto: paymentPhoto,
          rangeHour: rangeHour,
        });
        return {
          ...input,
          reservationId: reservationSQL.identifiers[0].reservationId,
        };
      } else {
        throw new GraphQLError("Id de usuario/servico es erròneo!", {
          extensions: {
            code: "ERROR_ID",
            argumentName: "id",
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
