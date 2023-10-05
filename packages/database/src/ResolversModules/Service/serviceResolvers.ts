import { Reservation, Service, User } from "../../db/TypeOrm/Entities";
import {
  Disponibility,
  FireStoreService,
  findService,
  listServices,
} from "../../db/Firebase/Firestore/Service";
import { reservationResolvers } from "../Reservation/reservationResolver";
import { mergeServices, mergeServicesWithSportCenter } from "../utils";
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
            (reservation) =>
              reservation.reservation.serviceId === service.serviceId
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
    listServicesBySport: async (root: any, { sport }: any) => {
      const servicesSQL = await Service.find({
        where: { sport: sport },
        relations: { sportCenter: true },
      });

      const servicesNoSQL = (await listServices()) as FireStoreService[];
      const mergeService = mergeServicesWithSportCenter(
        servicesSQL,
        servicesNoSQL
      );
      return mergeService;
    },
    getDisponibility: async (root: any, { serviceId }: any) => {
      const data = (await findService(serviceId)) as FireStoreService;
      return data.disponibility;
    },
  },
  Mutation: {
    createService: CreateServiceResolver,
    updateService: UpdateServiceResolver,
    deleteService: DeleteServiceResolver,
  },
};
