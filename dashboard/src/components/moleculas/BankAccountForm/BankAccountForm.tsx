import React from "react";
import { CustomButton, CustomInput } from "../../atomos";
type BanckAccountFormProps = {
  onSubmit: () => void;
};
const BanckAccountForm = ({ onSubmit }: BanckAccountFormProps) => {
  return (
    <form className="flex flex-col gap-3 py-4" action="">
      <CustomInput
        type="text"
        color="blue"
        name="name"
        label="Nombre del Banco"
      />
      <CustomInput type="text" color="blue" name="id" label="Identificacion" />
      <CustomInput
        type="text"
        color="blue"
        name="accountType"
        label="Tipo de Cuenta"
      />
      <CustomInput
        type="text"
        color="blue"
        name="accountNumber"
        label="Nro. Cuenta"
      />
      <CustomInput
        type="text"
        color="blue"
        name="email"
        label="Correo Electronico"
      />
      <CustomButton
        title="crear cuenta bancaria"
        color="sucessfull"
        type="submit"
        onClick={() => {
          onSubmit();
        }}
      />
    </form>
  );
};

export default BanckAccountForm;
