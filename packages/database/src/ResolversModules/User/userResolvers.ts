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
      });
      return { ...input, id: result.identifiers[0].userId };
    },
    updateUser: async (root: any, { input }: any) => {
      const result = await User.update(
        { userId: input.userId },
        {
          name: input.name,
          id: input.id,
          birthDate: input.birthDate,
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
    giveUserAccess: async (root: any, { userId }: { userId: string }) => {
      try {
        const existsId = await User.findOne({
          where: { userId: userId },
        });
        if (existsId) {
          await User.update(
            {
              userId: userId,
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
            message: `No existe el centro deportivo con el id ${userId}`,
          };
        }
      } catch (error) {
        return {
          status: "Failed",
          message: "No se puede dar acceso" + JSON.stringify(error),
        };
      }
    },
    removeUserAccess: async (root: any, { userId }: { userId: string }) => {
      try {
        const existsId = await User.findOne({
          where: { userId: userId },
        });
        if (existsId) {
          await User.update(
            {
              userId: userId,
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
            message: `No existe el centro deportivo con el id ${userId}`,
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
