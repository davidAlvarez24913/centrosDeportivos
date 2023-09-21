import { SportCenter } from "../../db/Entities";
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
      const searchedByName = await SportCenter.find({
        where: { name: dataSQL.name },
      });
      // Validation to not create with same name
      if (searchedByName.length === 0) {
        const result = await SportCenter.insert(dataSQL);
        const sportCenterId = result.identifiers[0].sportCenterId;
        await createFirestoreSportCenter({
          sportCenterId: sportCenterId,
          image: input.image,
          ranking: input.ranking,
        });
        return { ...input, sportCenterId };
      } else {
        throw new GraphQLError("Nombre del centro deportivo ya existe", {
          extensions: {
            code: "SPORT_CENTER_ALREADY_EXISTS",
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
            ubication: input.ubication ?? currentSportCenterSQL[0].ubication,
            hoursOperation: input.hoursOperation,
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
  },
};
