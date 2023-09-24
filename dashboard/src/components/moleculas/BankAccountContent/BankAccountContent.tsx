import React, { useState } from "react";
import { CustomButton, CustomInput } from "../../atomos";
import { UpdateBankAccountInput } from "schema";
import { eventNames } from "process";
export type BankAccountContentProps = {
  bankAccountId: string;
  name: string;
  id: string;
  accountType: string;
  accountNumber: string;
  email: string;
  onUpdate: (input: UpdateBankAccountInput) => void;
  onDelete: () => void;
  closeModal?: () => void;
};
const BankAccountContent = ({
  name,
  id,
  accountNumber,
  accountType,
  email,
  bankAccountId,
  onUpdate,
  onDelete,
  closeModal,
}: BankAccountContentProps) => {
  const [edit, setEdit] = useState(false);
  const [bankAccount, setbankAccount] = useState<UpdateBankAccountInput>({
    bankAccountId,
    name,
    id,
    accountNumber,
    accountType,
    email,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onUpdate(bankAccount);
    setEdit(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setbankAccount({ ...bankAccount, [event.target.name]: event.target.value });
  };
  return (
    <form
      id="bankAccountForm"
      className="flex flex-col gap-4 py-4"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <CustomInput
        type="text"
        color="blue"
        label="Identificacion"
        name="id"
        defaultValue={bankAccount.id!}
        disabled={!edit}
        onChange={handleChange}
      />
      <CustomInput
        name="accountType"
        type="text"
        color="blue"
        label="Tipo de Cuenta"
        defaultValue={bankAccount.accountType!}
        disabled={!edit}
        onChange={handleChange}
      />
      <CustomInput
        name="accountNumber"
        type="text"
        color="blue"
        label="Nro. Cuenta"
        defaultValue={bankAccount.accountNumber!}
        disabled={!edit}
        onChange={handleChange}
      />
      <CustomInput
        name="email"
        type="email"
        color="blue"
        label="Correo Electronico"
        defaultValue={bankAccount.email!}
        disabled={!edit}
        onChange={handleChange}
      />
      {!edit ? (
        <>
          <CustomButton
            title="editar cuenta bancaria"
            color="sucessfull"
            type="button"
            onClick={() => {
              setEdit(true);
            }}
          />
          <CustomButton
            title="eliminar cuenta bancaria"
            color="cancel"
            type="button"
            onClick={() => {
              onDelete();
              closeModal!();
            }}
          />
        </>
      ) : (
        <div className="flex flex-row gap-2 pt-4">
          <CustomButton
            title="Cancelar"
            color="cancel"
            type="button"
            onClick={() => {
              setEdit(false);
            }}
          />
          <CustomButton title="editar" color="sucessfull" type="submit" />
        </div>
      )}
    </form>
  );
};

export default BankAccountContent;
