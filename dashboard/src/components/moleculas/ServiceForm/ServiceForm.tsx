import React from "react";
import { CustomButton, CustomInput, CustomSelect } from "../../atomos";
import { Sport } from "schema";
type BanckAccountFormProps = {
  onSubmit: () => void;
};
const sports = Object.values(Sport);
const BanckAccountForm = ({ onSubmit }: BanckAccountFormProps) => {
  return (
    <form className="flex flex-col gap-3 py-4" action="">
      <CustomInput
        type="text"
        color="blue"
        name="name"
        label="Nombre del Servicio"
        placeholder="Nombre del Servicio"
      />
      <CustomInput
        type="text"
        color="blue"
        name="description"
        label="Descripcion"
        placeholder="Descripcion"
      />
      <CustomSelect color="blue" sports={sports} name="sport" label="Deporte" />
      <CustomButton
        title="crear servicio"
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
