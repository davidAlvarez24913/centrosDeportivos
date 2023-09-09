import React from "react";
import { CustomButton, CustomInput } from "../../atomos";
type BanckAccountFormProps = {
  closeModal: () => void;
};
const BanckAccountForm = ({ closeModal }: BanckAccountFormProps) => {
  return (
    <form className="flex flex-col gap-3 py-4" action="">
      <CustomInput type="text" color="blue" label="Nombre del Banco" />
      <CustomInput type="text" color="blue" label="Identificacion" />
      <CustomInput type="text" color="blue" label="Tipo de Cuenta" />
      <CustomInput type="text" color="blue" label="Nro. Cuenta" />
      <CustomInput type="text" color="blue" label="Correo Electronico" />
      <CustomButton
        title="crear cuenta bancaria"
        color="sucessfull"
        type="button"
        onClick={() => {
          closeModal();
        }}
      />
    </form>
  );
};

export default BanckAccountForm;
