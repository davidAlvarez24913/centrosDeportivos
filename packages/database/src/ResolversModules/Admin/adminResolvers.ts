import { existsRecord } from "../../db/Firebase/Firestore/Admin";

export const adminResolvers = {
  Query: {
    isAdmin: async (root: any, { adminId }: any) => {
      const admin = await existsRecord(adminId);
      return admin ? true : false;
    },
  },
};
