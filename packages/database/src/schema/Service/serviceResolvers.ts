import { SportCenter, Service } from "../../db/Entities";
import {
  FireStoreService,
  createFirestoreService,
  findService,
  listServices,
  updateFirestoreService,
} from "../../db/Firebase/Firestore/Service";
import { mergeServices } from "../utils";
export const serviceResolvers = {
  Query: {
    listServices: async () => {
      // evitar hacer JOIN con el find, buscar forma de obtener sportCenterId.
      const servicesSQL = await Service.find({
        relations: { sportCenter: true, reservations: true },
      });
      const servicesNoSQL = (await listServices()) as FireStoreService[];
      const mergeService = mergeServices(servicesSQL, servicesNoSQL);
      const result = mergeService.map((service) => {
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
      const servicesSQL = await Service.find({
        relations: { sportCenter: true, reservations: true },
      });
      const servicesNoSQL = (await listServices()) as FireStoreService[];
      const mergeService = mergeServices(servicesSQL, servicesNoSQL);
      const result = mergeService.map((service) => {
        return {
          ...service,
          sportCenterId: service.sportCenter.sportCenterId,
          reservations: service.reservations.map((reservation) => {
            return { ...reservation };
          }),
        };
      });
      return result.filter(
        (service) => service.sportCenterId === Number(sportCenterId)
      );
    },
  },
  Mutation: {
    createService: async (root: any, { input }: any) => {
      //validation sportCenetr id exists!
      const sportCenter = await SportCenter.findOneBy({
        sportCenterId: input.sportCenterId,
      });
      if (sportCenter) {
        const result = await Service.insert({
          ...input,
          sportCenter: input.sportCenterId,
        });
        // inser firestore
        await createFirestoreService({
          serviceId: result.identifiers[0].serviceId,
          image: input.image,
          calification: input.calification,
        });
        return {
          ...input,
          serviceId: result.identifiers[0].serviceId,
        };
      }
      return null;
    },
    updateService: async (root: any, { input }: any) => {
      try {
        const currentServiceSQL = await Service.findOneBy({
          serviceId: input.serviceId,
        });
        const currentServiceNoSQL = await findService(input.serviceId);
        await updateFirestoreService({
          serviceId: input.serviceId,
          image: input.image ?? currentServiceNoSQL?.image,
          calification: input.calification ?? currentServiceNoSQL?.calification,
        });
        await Service.update(
          {
            serviceId: input.serviceId,
          },
          {
            name: input.name ?? currentServiceSQL?.name,
            description: input.description ?? currentServiceSQL?.description,
            price: input.price ?? currentServiceSQL?.price,
            sport: input.sport ?? currentServiceSQL?.sport,
          }
        );
        return {
          status: "Ok",
          message: "Servicio se actualizo exitosamente",
        };
      } catch (error) {
        return {
          status: "Failed",
          message: "No se pudo actualizar" + JSON.stringify(error),
        };
      }
    },
  },
};
