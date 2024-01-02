import React, { useState } from "react";
import { CustomButton } from "../../atomos";
import Account from "../Account/Account";
import { Modal } from "../../moleculas";
import BanckAccountForm from "../../moleculas/BankAccountForm/BankAccountForm";
import { BankAccountContentProps } from "../../moleculas/BankAccountContent/BankAccountContent";
import { CreateBankAccountInput } from "schema";

type AccountSectionProps = {
  accounts: BankAccountContentProps[];
  onCreate: (input: CreateBankAccountInput) => void;
  sportCenterId: string;
};
const AccountSection = ({
  accounts,
  onCreate,
  sportCenterId,
}: AccountSectionProps) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <CustomButton
        color="blue"
        title="Crear cuenta bancaria"
        type="button"
        addIcon
        onClick={() => {
          setModal(true);
        }}
      />
      {accounts.map((account, index) => {
        console.log(account);
        return <Account {...account} key={index} />;
      })}
      <Modal
        title={"Crear Cuenta Bancaria"}
        modalState={modal}
        closeModal={() => {
          setModal(false);
        }}
      >
        <BanckAccountForm
          closeModal={() => setModal(false)}
          onCreate={onCreate}
          sportCenterId={sportCenterId}
        />
      </Modal>
    </div>
  );
};

export default AccountSection;
