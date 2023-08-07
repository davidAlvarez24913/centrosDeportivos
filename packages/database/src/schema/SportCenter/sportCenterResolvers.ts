import { SportCenter } from "../../db/Entities";
export const sportCenterResolvers = {
  Query: {
    listSportCenters: async () => {
      const sportsCenters = await SportCenter.find({
        relations: { services: true },
      });
      const result = sportsCenters.map((sportCenter) => {
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
      const result = await SportCenter.insert(input);
      return { ...input, id: result.identifiers[0].id };
    },
  },
};
