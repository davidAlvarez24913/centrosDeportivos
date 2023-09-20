import React, { useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  CustomTextarea,
} from "../../atomos";
import { Sport } from "schema";
import ImageInput from "../ImageInput";
import useUser from "../../../Hooks/useUser";
type ServiceFormProps = {
  onSubmit: () => void;
};
const sports = Object.values(Sport);
const ServiceForm = ({ onSubmit }: ServiceFormProps) => {
  const { user } = useUser();
  const [FileBlob, setFileBlob] = useState<string>();
  const [newService, setNewService] = useState({
    name: "",
    sport: "",
    description: "",
    sportCenterId: user?.uid,
    image: "name image of bucket",
  });
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
        onChange={(e) =>
          setNewService({ ...newService, name: e.currentTarget.value })
        }
      />
      <CustomTextarea
        color="blue"
        label="Descripción"
        onChange={(e) => {
          setNewService({ ...newService, description: e.currentTarget.value });
        }}
      />
      <CustomSelect
        color="blue"
        sports={sports}
        name="sport"
        label="Deporte"
        onChange={(e) =>
          setNewService({ ...newService, sport: e.currentTarget.value })
        }
      />
      <ImageInput
        label="agregar imagen del servicio"
        fileBlob={FileBlob}
        setFileBlob={setFileBlob}
      ></ImageInput>
      <CustomButton
        title="crear servicio"
        color="sucessfull"
        type="submit"
        onClick={() => console.log(newService)}
      />
    </form>
  );
};

export default ServiceForm;
