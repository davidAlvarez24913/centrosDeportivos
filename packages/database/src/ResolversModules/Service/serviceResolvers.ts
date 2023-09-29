import { SportCenter, Service } from "../../db/TypeOrm/Entities";
import {
  Disponibility,
  FireStoreService,
  createFirestoreService,
  deleteFirestoreService,
  findService,
  listServices,
  updateFirestoreService,
} from "../../db/Firebase/Firestore/Service";
import { GraphQLError } from "graphql";
import { reservationResolvers } from "../Reservation/reservationResolver";
import { mergeServices, schedule } from "../utils";
import { FirebaseError } from "firebase/app";
import { deleteImage, uploadFile } from "../../db/Firebase/Bucket";
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
          sportCenterId: service.sportCenter.sportCenterId,
          reservations: allReservations.filter(
            (reservation) => reservation.serviceId === service.serviceId
          ),
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
      const allReservations =
        await reservationResolvers.Query.allReservations();
      const result = mergeService.map((service) => {
        return {
          ...service,
          sportCenterId: service.sportCenter.sportCenterId,
          reservations: allReservations.filter(
            (reservation) => reservation.serviceId === service.serviceId
          ),
        };
      });
      return result.filter(
        (service) => service.sportCenterId === sportCenterId
      );
    },
  },
  Mutation: {
    createService: CreateServiceResolver,
    updateService: UpdateServiceResolver,
    deleteService: DeleteServiceResolver,
  },
};
