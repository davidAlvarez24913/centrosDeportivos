import React, { useState } from "react";
import { CustomButton, CustomInput } from "../../atomos";
import CustomTextarea from "../../atomos/CustomTextarea";
import ImageInput from "../ImageInput";
type SportCenterFormProps = {
  onSubmit: () => void;
};
const SportCenterForm = ({ onSubmit }: SportCenterFormProps) => {
  const [image, setImage] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(event.target.value);
  };
  return (
    <form
      className="flex flex-col gap-3 py-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <ImageInput
        fileBlob={image}
        label="Agregar Imagen del Centro Deportivo"
        setFileBlob={setImage}
      />
      <CustomInput
        type="text"
        color="blue"
        name="name"
        label="Nombre del Centro Deportivo"
        placeholder="Nombre del Centro Deportivo"
        required
        onChange={handleChange}
      />
      <CustomTextarea
        color="blue"
        label="Descripción"
        onChange={handleChange}
      />
      <CustomInput
        type="text"
        color="blue"
        name="ubication"
        label="Ubicación"
        placeholder="Ubicación"
        required
        onChange={handleChange}
      />
      <CustomInput
        type="text"
        color="blue"
        name="phone"
        label="Telefono"
        placeholder="Telefono"
        required
        onChange={handleChange}
      />
      <CustomInput
        type="text"
        color="blue"
        name="email"
        label="Correo Electrónico"
        placeholder="Correo Electrónico"
        required
        onChange={handleChange}
      />
      <CustomButton title="crear servicio" color="sucessfull" type="submit" />
    </form>
  );
};

export default SportCenterForm;
