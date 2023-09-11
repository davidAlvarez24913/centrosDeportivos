import React from "react";
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  CustomTextarea,
} from "../../atomos";
import { Sport } from "schema";
type ServiceFormProps = {
  onSubmit: () => void;
};
const sports = Object.values(Sport);
const ServiceForm = ({ onSubmit }: ServiceFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      className="flex flex-col gap-3 py-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <CustomInput
        type="text"
        color="blue"
        name="name"
        label="Nombre del Servicio"
        placeholder="Nombre del Servicio"
      />
      <CustomTextarea color="blue" label="Descripción" />
      <CustomSelect color="blue" sports={sports} name="sport" label="Deporte" />
      <CustomButton title="crear servicio" color="sucessfull" type="submit" />
    </form>
  );
};

export default ServiceForm;
