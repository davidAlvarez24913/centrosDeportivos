import { Reservation, Service, User } from "../../db/Entities";
export const reservationResolvers = {
  Query: {
    reservationCount: async () => (await Reservation.find()).length,
    allReservations: async () => {
      const reservations = await Reservation.find({
        relations: { user: true, service: true },
      });
      const result = reservations.map((reservation) => {
        return {
          ...reservation,
          userId: reservation.user.userId,
          serviceId: reservation.service.serviceId,
        };
      });
      console.log(result);
      return result;
    },
    findReservation: async (root: any, args: any) => {
      const { id } = args;
      return await Reservation.findOneBy({ reservationId: id });
    },
  },

  Mutation: {
    createReservation: async (root: any, { input }: any) => {
      const user = await User.findOneBy({
        userId: input.userId,
      });
      const service = await Service.findOneBy({
        serviceId: input.serviceId,
      });
      console.log(input);
      if (user && service) {
        const result = await Reservation.insert({
          ...input,
          user: input.userId,
          service: input.serviceId,
        });
        return { ...input, reservationId: result.identifiers[0].reservationId };
      }
      return null;
    },
    deleteReservation: async (root: any, args: any) => {
      const result = await Reservation.delete(args.id);
      if (result.affected === 1) return true;
      return false;
    },
    // updateUser: async (root: any, { input }: any) => {
    //   const result = await Reservation.update(
    //     { reservationId: input.id },
    //     {
    //       name: input.name,
    //     }
    //   );
    //   if (result.affected === 1) return { ...input };
    //   return false;
    // },
  },
};
