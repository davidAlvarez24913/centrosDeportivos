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
    createService: async (root: any, { input }: any) => {
      //validation sportCenetr id exists!
      const sportCenter = await SportCenter.findOneBy({
        sportCenterId: input.sportCenterId,
      });
      let serviceId;
      const { image, disponibility, ranking, ...dataSQL } = input;
      if (sportCenter) {
        try {
          const result = await Service.insert({
            ...dataSQL,
            sportCenter: dataSQL.sportCenterId,
          });
          serviceId = result.identifiers[0].serviceId;
          const auxDisponibility =
            input.disponibility === undefined || input.disponibility === null
              ? undefined
              : schedule(input.disponibility);

          // upload image
          const auxNameImage =
            "services/" + input.sportCenterId + "-" + serviceId;
          const imageUrl = await uploadFile(input.image, auxNameImage);

          // insert firestore
          await createFirestoreService({
            serviceId,
            image: auxNameImage + "#" + imageUrl,
          });
          return {
            ...input,
            serviceId,
          };
        } catch (error) {
          if (serviceId) {
            await Service.delete({ serviceId: Number(serviceId) });
          }
          console.log(typeof error, "error: ", error);
          throw new GraphQLError(
            `No se pudo crear el servicio ${JSON.stringify(error)}`,
            {
              extensions: {
                code: "ERROR_CREATE_SERVICE",
                argumentName: "error",
              },
            }
          );
        }
      }
    },
    updateService: async (root: any, { input }: any) => {
      try {
        const currentServiceSQL = await Service.findOneBy({
          serviceId: input.serviceId,
        });
        const currentServiceNoSQL = await findService(input.serviceId);

        const auxNameImage =
          "services/" +
          input.sportCenterId +
          "-" +
          currentServiceSQL?.serviceId;

        let imageUrl = "";
        if (input.image != currentServiceNoSQL?.image) {
          imageUrl = await uploadFile(input.image, auxNameImage);
          if (imageUrl) {
            await updateFirestoreService({
              serviceId: input.serviceId,
              image: auxNameImage + "#" + imageUrl,
              ranking: input.ranking ?? currentServiceNoSQL?.ranking,
              disponibility: { ...input.disponibility },
            });
            await Service.update(
              {
                serviceId: input.serviceId,
              },
              {
                name: input.name ?? currentServiceSQL?.name,
                description:
                  input.description ?? currentServiceSQL?.description,
                sport: input.sport ?? currentServiceSQL?.sport,
              }
            );
          }
        }

        await updateFirestoreService({
          serviceId: input.serviceId,
          image: input.image,
          ranking: 0,
          disponibility: { ...(input.disponibility as Disponibility) },
        });
        await Service.update(
          {
            serviceId: input.serviceId,
          },
          {
            name: input.name ?? currentServiceSQL?.name,
            description: input.description ?? currentServiceSQL?.description,
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
          message: "No se pudo actualizar" + JSON.stringify(error as Error),
        };
      }
    },
    deleteService: async (root: any, { serviceId }: { serviceId: string }) => {
      const flagNoSQL = await findService(serviceId);
      const flagSQL = await Service.findOneBy({ serviceId: Number(serviceId) });

      if (flagNoSQL && flagSQL) {
        const deleteSQL = await Service.delete({
          serviceId: Number(serviceId),
        });
        // delete image bucket
        const nameImage = flagNoSQL.image.split("#")[0];
        await deleteImage(nameImage);

        const deletNoSQL = await deleteFirestoreService(serviceId);
        const result = await Promise.all([deletNoSQL, deleteSQL]);
        if (result[1].affected === 1) {
          return { status: "Ok", message: "Servicio eliminado correctmente" };
        } else {
          return { status: "Failed", message: "Servicio no se elimino ;)" };
        }
      } else {
        return { status: "Failed", message: "El id de servico no existe" };
      }
    },
  },
};
