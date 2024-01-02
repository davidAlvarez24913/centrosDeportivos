import { createAdmin, existsRecord } from "../../db/Firebase/Firestore/Admin";

export const adminResolvers = {
  Query: {
    isAdmin: async (root: any, { adminId }: any) => {
      const admin = await existsRecord(adminId);
      return admin ? true : false;
    },
  },
  Mutation: {
    createAdmin: async (root: any, { userId }: { userId: string }) => {
      await createAdmin(userId);
      return true;
    },
  },
};
