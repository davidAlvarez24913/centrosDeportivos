import React, { useState } from "react";
import { CustomButton } from "../../atomos";
import Modal from "../../moleculas/Modal";
import { BankAccountContent } from "../../moleculas";
import { BankAccountContentProps } from "../../moleculas/BankAccountContent/BankAccountContent";

const Account = (account: BankAccountContentProps) => {
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
        <BankAccountContent {...account} closeModal={() => setModal(false)} />
      </Modal>
    </div>
  );
};

export default Account;
