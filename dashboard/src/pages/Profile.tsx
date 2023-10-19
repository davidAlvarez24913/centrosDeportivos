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
import { Loading } from "../components/atomos";
import { toast } from "react-toastify";

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
    createBankAccountMutation({ variables: { input } })
      .then(() => {
        bankAccountsData.refetch();
        toast.success("Cuenta Bancaria creada correctamente!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se pudo crear la cuenta bancaria intentalo mas tarde", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  const onUpdateBankAccount = (input: UpdateBankAccountInput) => {
    updateBankAccountMutation({ variables: { input } })
      .then(() => {
        bankAccountsData.refetch();
        toast.success("Cuenta Bancaria Editada correctamente", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "No se pudo editar la cuenta bancaria, intentalo mas tarde",
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };
  const onDeleleteBackAccount = (bankAccountId: string) => {
    deleteBankAccountMutation({
      variables: { bankAccountId: bankAccountId },
    })
      .then(() => {
        bankAccountsData.refetch();
        toast.success("Cuenta Bancaria Eliminada correctamente", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "No se pudo eliminar la cuenta bancaria, intentalo mas tarde",
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };

  const sportCenter = data?.getSportCenter;
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

  return (
    <LayoutPage nameSportCenter={sportCenter?.name || " "}>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex ">
          <div className="w-2/3 flex flex-col ">
            <EditSportCenterButton
              sportCenterId={sportCenterId}
              {...sportCenter!}
              updateSportCenter={onUpdateSportCenter}
            />
            <Profile {...sportCenter!} />
          </div>
          <div className="w-1/3">
            <AccountSection
              accounts={bankAccounts}
              onCreate={onCreateBankAccount}
              sportCenterId={sportCenterId}
            />
          </div>
        </div>
      )}
    </LayoutPage>
  );
};
export default ProfilePage;
