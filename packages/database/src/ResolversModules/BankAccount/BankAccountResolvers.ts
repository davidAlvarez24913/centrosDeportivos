import { BankAccount } from "../../db/TypeOrm/Entities";

export const bankAccountResolvers = {
  Query: {
    listBankAccountsBySportCenterId: async (
      root: any,
      { sportCenterId }: any
    ) => {
      const bankAccounts = await BankAccount.find({
        where: { sportCenter: { sportCenterId: sportCenterId } },
      });
      const result = bankAccounts.map((bankAccount) => {
        return { ...bankAccount, sportCenterId: sportCenterId };
      });
      return result;
    },
  },
  Mutation: {
    createBankAccount: async (root: any, { input }: any) => {
      const result = await BankAccount.insert({
        ...input,
        sportCenter: input.sportCenterId,
      });
      return { ...input, bankAccountId: result.identifiers[0].bankAccountId };
    },
    updateBankAccount: async (root: any, { input }: any) => {
      const result = await BankAccount.update(
        { bankAccountId: input.bankAccountId },
        {
          name: input.name,
          id: input.id,
          accountType: input.accountType,
          accountNumber: input.accountNumber,
          email: input.email,
        }
      );
      if (result.affected === 1)
        return {
          status: "Ok",
          message: "Cuenta Bancaria se actualizó correctamente",
        };
      return {
        status: "Failed",
        message: "No se pudo editar la cuenta bancaria",
      };
    },
    deleteBankAccount: async (
      root: any,
      { bankAccountId }: { bankAccountId: string }
    ) => {
      const result = await BankAccount.delete(bankAccountId);
      if (result.affected === 1)
        return {
          status: "Ok",
          message: "Cuenta Bancaria se eliminó correctamente",
        };
      return {
        status: "Failed",
        message: "No se pudo eliminar",
      };
    },
  },
};
