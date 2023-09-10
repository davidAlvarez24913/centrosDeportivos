import React, { useState } from "react";
import { CustomButton } from "../../atomos";
import Modal from "../../moleculas/Modal";
import { BankAccountContent } from "../../moleculas";

export type AccountProps = {
  bankName: string;
  id: string;
  accountType: string;
  accountNumber: string;
  email: string;
};
const Account = (account: AccountProps) => {
  const [modal, setModal] = useState(false);

  const { bankName } = account;
  return (
    <div>
      <CustomButton
        color="outline"
        title={bankName}
        type="button"
        onClick={() => {
          setModal(true);
        }}
      />
      <Modal
        title={bankName}
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
