import React, { useState } from "react";
import { CustomButton, CustomInput } from "../../atomos";
import CustomTextarea from "../../atomos/CustomTextarea";
import ImageInput from "../ImageInput";
export type ProfileProps = {
  name: string;
  description: string;
  ubication: string;
  phone: string;
  email: string;
  image: string;
};
type EditSportCenterFormProps = {
  onSubmit: () => void;
  sportCenter: ProfileProps;
  setSportCenter: React.Dispatch<React.SetStateAction<ProfileProps>>;
};

const EditSportCenterForm = ({
  onSubmit,
  sportCenter,
  setSportCenter,
}: EditSportCenterFormProps) => {
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
      <CustomTextarea
        color="blue"
        label="Descripción"
        onChange={handleChange}
        defaultValue={sportCenter.description}
      />
      <CustomInput
        type="text"
        color="blue"
        name="ubication"
        label="Ubicación"
        required
        defaultValue={sportCenter.ubication}
        onChange={handleChange}
      />
      <CustomInput
        type="text"
        color="blue"
        name="phone"
        label="Telefono"
        minLength={10}
        maxLength={10}
        required
        defaultValue={sportCenter.phone}
        onChange={handleChange}
      />
      <CustomInput
        type="email"
        color="blue"
        name="email"
        label="Correo Electrónico"
        required
        defaultValue={sportCenter.email}
        onChange={handleChange}
      />
      <CustomButton
        title="Editar Centro Deportivo"
        color="sucessfull"
        type="submit"
      />
    </form>
  );
};

export default EditSportCenterForm;
