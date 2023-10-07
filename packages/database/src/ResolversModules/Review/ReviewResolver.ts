import { GraphQLError } from "graphql";

import {
  Review,
  createReview,
  getReviewsBySportCenter,
} from "../../db/Firebase/Firestore/Review";

export const reviewResolvers = {
  Query: {
    listReviewsBySportCenter: async (
      root: any,
      { sportCenterId }: { sportCenterId: string }
    ) => {
      const reviews = await getReviewsBySportCenter(sportCenterId);
      return reviews;
    },
  },
  Mutation: {
    createReview: async (root: any, { input }: any) => {
      try {
        return await createReview(input);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
