import { User } from "../../db/Entities";
import {
  FireStoreUser,
  createUser,
  deleteUser,
  findUser,
  listUsers,
  updateUser,
} from "../../db/Firebase/Firestore/User";
import { mergeUsers } from "../utils";

export const userResolvers = {
  Query: {
    usersCount: async () => (await User.find()).length,
    allUsers: async () => {
      const sqlUser = await User.find();
      const firestoreUser = (await listUsers()) as FireStoreUser[];
      return mergeUsers(sqlUser, firestoreUser);
    },
    findUser: async (root: any, { userId }: any) => {
      const sqlUser = await User.findOneBy({ userId: userId });
      const firestoreUser = await findUser(userId);
      return { ...sqlUser, ...firestoreUser };
    },
  },

  Mutation: {
    createUser: async (root: any, { input }: any) => {
      const result = await User.insert(input);
      const userId = result.identifiers[0].userId;
      await createUser({ userId: userId, avatarUrl: input.avatarUrl });
      return { ...input, id: userId };
    },
    deleteUser: async (root: any, { userId }: any) => {
      const result = await User.delete(userId);
      await deleteUser(userId);
      if (result.affected === 1) return true;
      return false;
    },
    updateUser: async (root: any, { input }: any) => {
      const result = await User.update(
        { userId: input.userId },
        {
          name: input.name,
          age: input.age,
          phone: input.phone,
          email: input.email,
        }
      );
      await updateUser({ userId: input.userId, avatarUrl: input.avatarUrl });
      if (result.affected === 1) return { ...input };
      return false;
    },
  },
};
