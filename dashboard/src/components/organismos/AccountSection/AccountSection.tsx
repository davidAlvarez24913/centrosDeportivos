import React, { useState } from "react";
import { CustomButton } from "../../atomos";
import Account, { AccountProps } from "../Account/Account";
import { Modal } from "../../moleculas";
import BanckAccountForm from "../../moleculas/BankAccountForm/BankAccountForm";

type AccountSectionProps = {
  accounts: AccountProps[];
};
const AccountSection = ({ accounts }: AccountSectionProps) => {
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
      {accounts.map((account) => {
        return <Account {...account} key={account.id} />;
      })}
      <Modal
        title={"Crear Cuenta Bancaria"}
        modalState={modal}
        closeModal={() => {
          setModal(false);
        }}
      >
        <BanckAccountForm onSubmit={() => setModal(false)} />
      </Modal>
    </div>
  );
};

export default AccountSection;
