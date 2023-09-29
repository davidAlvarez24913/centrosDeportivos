import { User } from "../../db/TypeOrm/Entities";

export const userResolvers = {
  Query: {
    allUsers: async () => await User.find(),
    findUser: async (root: any, { userId }: any) =>
      await User.findOneBy({ userId: userId }),
  },

  Mutation: {
    createUser: async (root: any, { input }: any) => {
      const result = await User.insert({
        ...input,
        birthDate: new Date(input.birthDate),
      });
      return { ...input, id: result.identifiers[0].userId };
    },
    updateUser: async (root: any, { input }: any) => {
      const result = await User.update(
        { userId: input.userId },
        {
          name: input.name,
          id: input.id,
          phone: input.phone,
          email: input.email,
        }
      );
      if (result.affected === 1)
        return {
          status: "Ok",
          message: "Centro deportivo se actualizo exitosamente",
        };
      return {
        status: "Failed",
        message: "No se pudo actualizar",
      };
    },
    deleteUser: async (root: any, { userId }: any) => {
      const result = await User.delete(userId);
      if (result.affected === 1)
        return {
          status: "Ok",
          message: "Centro deportivo se actualizo exitosamente",
        };
      return {
        status: "Failed",
        message: "No se pudo actualizar",
      };
    },
  },
};
