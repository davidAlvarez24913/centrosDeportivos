import React, { useState } from "react";
import { CustomButton, CustomInput } from "../../atomos";
type BankAccountContentProps = {
  id: string;
  accountType: string;
  accountNumber: string;
  email: string;
};
const BankAccountContent = ({
  id,
  accountNumber,
  accountType,
  email,
}: BankAccountContentProps) => {
  const [edit, setEdit] = useState(false);

  return (
    <form className="flex flex-col gap-2 py-4" action="">
      <CustomInput
        type="text"
        color="blue"
        label="Identificacion"
        placeholder={id}
        disabled={!edit}
      />
      <CustomInput
        type="text"
        color="blue"
        label="Tipo de Cuenta"
        placeholder={accountType}
        disabled={!edit}
      />
      <CustomInput
        type="text"
        color="blue"
        label="Nro. Cuenta"
        placeholder={accountNumber}
        disabled={!edit}
      />
      <CustomInput
        type="text"
        color="blue"
        label="Correo Electronico"
        placeholder={email}
        disabled={!edit}
      />
      {!edit ? (
        <CustomButton
          title="editar cuenta bancaria"
          color="sucessfull"
          type="button"
          onClick={() => {
            setEdit(true);
          }}
        />
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
          <CustomButton
            title="editar"
            color="sucessfull"
            type="submit"
            onClick={() => {
              setEdit(false);
            }}
          />
        </div>
      )}
    </form>
  );
};

export default BankAccountContent;
