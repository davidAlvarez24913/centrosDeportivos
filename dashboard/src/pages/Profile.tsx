import React from "react";
import { LayoutPage, Profile } from "../components/moleculas";
import {
  AccountSection,
  EditSportCenterButton,
} from "../components/organismos";
import useUser from "../Hooks/useUser";
import {
  CreateBankAccountInput,
  UpdateBankAccountInput,
  UpdateSportCenterInput,
  useCreateBankAccountMutation,
  useDeleteBankAccountMutation,
  useGetSportCenterQuery,
  useListBankAccountsBySportCenterIdQuery,
  useUpdateBankAccountMutation,
  useUpdateSportCenterMutation,
} from "schema";
import { error } from "console";

const ProfilePage = () => {
  const sportCenterId = useUser().user?.uid!;
  const { data, loading, refetch } = useGetSportCenterQuery({
    variables: { sportCenterId: sportCenterId },
  });
  const bankAccountsData = useListBankAccountsBySportCenterIdQuery({
    variables: { sportCenterId: sportCenterId },
  });
  const [updateSportCenterMutation] = useUpdateSportCenterMutation();
  const [createBankAccountMutation] = useCreateBankAccountMutation();
  const [updateBankAccountMutation] = useUpdateBankAccountMutation();
  const [deleteBankAccountMutation] = useDeleteBankAccountMutation();

  const onUpdateSportCenter = (input: UpdateSportCenterInput) => {
    updateSportCenterMutation({ variables: { input } }).then(() => refetch());
  };
  const onCreateBankAccount = (input: CreateBankAccountInput) => {
    createBankAccountMutation({ variables: { input } }).then(() => {
      bankAccountsData.refetch();
      alert("Cuenta Bancaria creada correctamente");
    });
  };
  const onUpdateBankAccount = (input: UpdateBankAccountInput) => {
    updateBankAccountMutation({ variables: { input } }).then(() => {
      bankAccountsData.refetch();
      alert("Cuenta Bancaria Editada correctamente");
    });
  };
  const onDeleleteBackAccount = (bankAccountId: string) => {
    deleteBankAccountMutation({
      variables: { bankAccountId: bankAccountId },
    }).then(() => {
      bankAccountsData.refetch();
      alert("Cuenta Bancaria Eliminada correctamente");
    });
  };

  const sportCenter = data?.getSportCenter!;
  const bankAccounts =
    bankAccountsData.data?.listBankAccountsBySportCenterId?.map(
      (bankAccount) => {
        return {
          ...bankAccount!,
          onDelete: () => {
            onDeleleteBackAccount(bankAccount?.bankAccountId!);
          },
          onUpdate: onUpdateBankAccount,
        };
      }
    ) || [];

  return loading && bankAccountsData.loading ? (
    <div></div>
  ) : (
    <LayoutPage nameSportCenter={sportCenter.name}>
      <div className="flex ">
        <div className="w-2/3 flex flex-col ">
          <EditSportCenterButton
            sportCenterId={sportCenterId}
            {...sportCenter}
            updateSportCenter={onUpdateSportCenter}
          />
          <Profile
            {...sportCenter}
            image={sportCenter.image ? sportCenter.image : ""}
          />
        </div>
        <div className="w-1/3">
          <AccountSection
            accounts={bankAccounts}
            onCreate={onCreateBankAccount}
            sportCenterId={sportCenterId}
          />
        </div>
      </div>
    </LayoutPage>
  );
};
export default ProfilePage;
