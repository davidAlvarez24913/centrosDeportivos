import { SportCenter, Service } from "../../db/Entities";
export const serviceResolvers = {
  Query: {
    listServices: async () => {
      // evitar hacer JOIN con el find, buscar forma de obtener sportCenterId.
      const services = await Service.find({
        relations: { sportCenter: true, reservations: true },
      });
      const result = services.map((service) => {
        return {
          ...service,
          sportCenterId: service.sportCenter.sportCenterId,
          reservations: service.reservations.map((reservation) => {
            return { ...reservation };
          }),
        };
      });
      return result;
    },
    listServicesBySportCenterId: async (root: any, { sportCenterId }: any) => {
      const services = await Service.find({
        where: { sportCenter: { sportCenterId: sportCenterId } },
        relations: { sportCenter: true, reservations: true },
      });
      const result = services.map((service) => {
        return {
          ...service,
          sportCenterId: service.sportCenter.sportCenterId,
          reservations: service.reservations.map((reservation) => {
            return { ...reservation };
          }),
        };
      });
      return result;
    },
  },
  Mutation: {
    createService: async (root: any, { input }: any) => {
      const sportCenter = await SportCenter.findOneBy({
        sportCenterId: input.sportCenterId,
      });
      if (sportCenter) {
        const result = await Service.insert({
          ...input,
          sportCenter: input.sportCenterId,
        });
        return {
          ...input,
          serviceId: result.identifiers[0].serviceId,
        };
      }
      return null;
    },
  },
};
