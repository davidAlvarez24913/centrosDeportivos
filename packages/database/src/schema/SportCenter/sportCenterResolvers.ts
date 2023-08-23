import { SportCenter } from "../../db/Entities";
import { GraphQLError } from "graphql";
import {
  FireStoreSportCenter,
  createFirestoreSportCenter,
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
  },
  Mutation: {
    createSportCenter: async (root: any, { input }: any) => {
      const searchedByName = await SportCenter.find({
        where: { name: input.name },
      });
      // Validation to not create with same name
      if (searchedByName.length === 0) {
        const result = await SportCenter.insert(input);
        const sportCenterId = result.identifiers[0].sportCenterId;
        await createFirestoreSportCenter({
          sportCenterId: sportCenterId,
          images: input.images,
          calification: input.calification ?? 0,
        });
        return { ...input, id: result.identifiers[0].id };
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
          images: input.images ?? currentSportCenterNoSQL?.images,
          calification:
            input.calification ?? currentSportCenterNoSQL?.calification,
        });
        await SportCenter.update(
          {
            sportCenterId: input.sportCenterId,
          },
          {
            name: input.name ?? currentSportCenterSQL[0].name,
            phone: input.phone ?? currentSportCenterSQL[0].phone,
            ubication: input.ubication ?? currentSportCenterSQL[0].ubication,
          }
        );
        return {
          status: "Ok",
          message: "Centro deportivo se actualizo exitosamente",
        };
      } catch (error) {
        console.log(error);
        return { status: "Failed", message: "No se pudo actualizar" };
      }
    },
  },
};
