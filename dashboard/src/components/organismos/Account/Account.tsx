import React, { useState } from "react";
import { CustomButton } from "../../atomos";
import Modal from "../../moleculas/Modal";
import { BankAccountContent } from "../../moleculas";

export type AccountProps = {
  bankAccountId: string;
  name: string;
  id: string;
  accountType: string;
  accountNumber: string;
  email: string;
};
const Account = (account: AccountProps) => {
  const [modal, setModal] = useState(false);

  const { name } = account;
  return (
    <div>
      <CustomButton
        color="outline"
        title={name}
        type="button"
        onClick={() => {
          setModal(true);
        }}
      />
      <Modal
        title={name}
        modalState={modal}
        closeModal={() => {
          setModal(false);
        }}
      >
        <BankAccountContent {...account} />
      </Modal>
    </div>
  );
};

export default Account;
