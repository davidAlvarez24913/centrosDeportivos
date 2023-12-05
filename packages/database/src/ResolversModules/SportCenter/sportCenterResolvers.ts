import { SportCenter, User } from "../../db/TypeOrm/Entities";
import { GraphQLError } from "graphql";
import {
  FireStoreSportCenter,
  createFirestoreSportCenter,
  deleteFirestoreSportCenter,
  findSportCenter,
  getAdmins,
  listSportCenters,
  updateFirestoreSportCenter,
} from "../../db/Firebase/Firestore/SportCenter";
import { mergeSportCenter } from "../utils";
import UpdateSportCenterResolver from "./UpdateSportCenterResolver";

export const sportCenterResolvers = {
  Query: {
    listSportCenters: async () => {
      const firestoreSportCenter =
        (await listSportCenters()) as FireStoreSportCenter[];
      const sportsCenters = await SportCenter.find();
      const mergedSportsCenter = mergeSportCenter(
        sportsCenters,
        firestoreSportCenter
      );
      return mergedSportsCenter;
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
      const { images, ...dataSQL } = input;
      console.log(input);
      let sportCenterId;
      try {
        const result = await SportCenter.insert(dataSQL);
        sportCenterId = result.identifiers[0].sportCenterId;
        await User.insert({
          userId: input.sportCenterId,
          name: input.name,
          id: "",
          birthDate: "",
          phone: "",
          email: input.email,
          access: true,
        });
        await createFirestoreSportCenter({
          sportCenterId: sportCenterId,
          image: input.image,
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
    updateSportCenter: UpdateSportCenterResolver,
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
    removeAccess: async (
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
              access: false,
            }
          );
          return {
            status: "Ok",
            message: "Centro deportivo sin acceso",
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
