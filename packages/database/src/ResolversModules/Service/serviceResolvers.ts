import { Reservation, Service, User } from "../../db/TypeOrm/Entities";
import {
  Disponibility,
  FireStoreService,
  listServices,
} from "../../db/Firebase/Firestore/Service";
import { reservationResolvers } from "../Reservation/reservationResolver";
import { mergeServices } from "../utils";
import CreateServiceResolver from "./CreateServiceResolver";
import UpdateServiceResolver from "./UpdateServiceResolver";
import DeleteServiceResolver from "./DeleteServiceResolver";

export const serviceResolvers = {
  Query: {
    listServices: async () => {
      // evitar hacer JOIN con el find, buscar forma de obtener sportCenterId.
      const servicesSQL = await Service.find({
        relations: { sportCenter: true, reservations: true },
      });
      const servicesNoSQL = (await listServices()) as FireStoreService[];
      const mergeService = mergeServices(servicesSQL, servicesNoSQL);

      const allReservations =
        await reservationResolvers.Query.allReservations();
      const result = mergeService.map((service) => {
        return {
          ...service,
          reservations: allReservations.filter(
            (reservation) => reservation.serviceId === service.serviceId
          ),
        };
      });
      return result;
    },
    listServicesBySportCenterId: async (root: any, { sportCenterId }: any) => {
      const servicesSQL = await Service.find({
        where: { sportCenter: { sportCenterId: sportCenterId } },
      });
      const servicesNoSQL = (await listServices()) as FireStoreService[];
      const mergeService = mergeServices(servicesSQL, servicesNoSQL);

      return mergeService.map((service) => {
        return { ...service, sportCenterId: sportCenterId };
      });
    },
  },
  Mutation: {
    createService: CreateServiceResolver,
    updateService: UpdateServiceResolver,
    deleteService: DeleteServiceResolver,
  },
};
