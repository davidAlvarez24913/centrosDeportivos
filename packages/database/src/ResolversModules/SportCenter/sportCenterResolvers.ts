import { SportCenter } from "../../db/TypeOrm/Entities";
import { GraphQLError } from "graphql";
import {
  FireStoreSportCenter,
  createFirestoreSportCenter,
  deleteFirestoreSportCenter,
  findSportCenter,
  listSportCenters,
  updateFirestoreSportCenter,
} from "../../db/Firebase/Firestore/SportCenter";
import { mergeSportCenter } from "../utils";

export const sportCenterResolvers = {
  Query: {
    listSportCenters: async () => {
      const firestoreSportCenter =
        (await listSportCenters()) as FireStoreSportCenter[];
      const sportsCenters = await SportCenter.find({
        relations: { services: true },
      });
      const mergedSportsCenter = mergeSportCenter(
        sportsCenters,
        firestoreSportCenter
      );
      const result = mergedSportsCenter.map((sportCenter) => {
        return {
          ...sportCenter,
          services: sportCenter.services.map((service) => {
            return { ...service };
          }),
        };
      });
      return result;
    },
    getSportCenter: async (
      _root: any,
      { sportCenterId }: { sportCenterId: string }
    ) => {
      const sqlSportCenter = await SportCenter.findOne({
        where: { sportCenterId: sportCenterId },
      });
      const firestoreSportCenter = await findSportCenter(sportCenterId);
      return { ...sqlSportCenter, ...firestoreSportCenter };
    },
    getSportCenterWithServices: async (root: any, { sportCenterId }: any) => {
      const sportCenterWithServices = await SportCenter.findOne({
        relations: { services: true },
        where: { sportCenterId: sportCenterId },
      });
      const firestoreSportCenter = await findSportCenter(sportCenterId);
      return { ...sportCenterWithServices, ...firestoreSportCenter };
    },
    getAccess: async (_root: any, { sportCenterId }: any) => {
      const sportCenter = await SportCenter.findOne({
        where: { sportCenterId: sportCenterId },
      });
      return sportCenter?.access;
    },
  },
  Mutation: {
    createSportCenter: async (root: any, { input }: any) => {
      const { images, ranking, ...dataSQL } = input;
      let sportCenterId;
      try {
        const result = await SportCenter.insert(dataSQL);
        sportCenterId = result.identifiers[0].sportCenterId;
        await createFirestoreSportCenter({
          sportCenterId: sportCenterId,
          image: input.image,
          ranking: input.ranking,
        });
        return { ...input, sportCenterId };
      } catch (e) {
        await SportCenter.delete({ sportCenterId: sportCenterId });
        throw new GraphQLError("Error no se pudo registrar", {
          extensions: {
            code: "SPORT_CENTER_ERROR_REGISTER",
            argumentName: "name",
          },
        });
      }
    },
    updateSportCenter: async (root: any, { input }: any) => {
      // query to get current data, if dont pass sql data not update record
      const currentSportCenterSQL = await SportCenter.find({
        where: { sportCenterId: input.sportCenterId },
      });
      const currentSportCenterNoSQL = await findSportCenter(
        input.sportCenterId
      );

      try {
        await updateFirestoreSportCenter({
          sportCenterId: input.sportCenterId,
          image: input.image ?? currentSportCenterNoSQL?.images,
          ranking: input.ranking ?? currentSportCenterNoSQL?.ranking,
        });
        await SportCenter.update(
          {
            sportCenterId: input.sportCenterId,
          },
          {
            name: input.name ?? currentSportCenterSQL[0].name,
            phone: input.phone ?? currentSportCenterSQL[0].phone,
            email: input.email ?? currentSportCenterSQL[0].email,
            description:
              input.description ?? currentSportCenterSQL[0].description,
            ubication: input.ubication ?? currentSportCenterSQL[0].ubication,
            schedule: input.schedule,
          }
        );
        return {
          status: "Ok",
          message: "Centro deportivo se actualizo exitosamente",
        };
      } catch (error) {
        return {
          status: "Failed",
          message: "No se pudo actualizar" + JSON.stringify(error),
        };
      }
    },
    deleteSportCenter: async (
      root: any,
      { sportCenterId }: { sportCenterId: string }
    ) => {
      try {
        const existsId = await SportCenter.findOne({
          where: { sportCenterId: sportCenterId },
        });
        if (existsId) {
          await SportCenter.delete(sportCenterId);
          await deleteFirestoreSportCenter(sportCenterId);
          return {
            status: "Ok",
            message: "Centro deportivo eliminado",
          };
        } else {
          return {
            status: "Failed",
            message: `No existe el centro deportivo con el id ${sportCenterId}`,
          };
        }
      } catch (error) {
        return {
          status: "Failed",
          message: "No se puede eliminar" + JSON.stringify(error),
        };
      }
    },
    giveAccess: async (
      root: any,
      { sportCenterId }: { sportCenterId: string }
    ) => {
      try {
        const existsId = await SportCenter.findOne({
          where: { sportCenterId: sportCenterId },
        });
        if (existsId) {
          await SportCenter.update(
            {
              sportCenterId: sportCenterId,
            },
            {
              access: true,
            }
          );
          return {
            status: "Ok",
            message: "Centro deportivo con acceso",
          };
        } else {
          return {
            status: "Failed",
            message: `No existe el centro deportivo con el id ${sportCenterId}`,
          };
        }
      } catch (error) {
        return {
          status: "Failed",
          message: "No se puede dar acceso" + JSON.stringify(error),
        };
      }
    },
  },
};
