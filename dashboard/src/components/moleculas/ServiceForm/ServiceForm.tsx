import React, { useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  CustomTextarea,
} from "../../atomos";
import { CreateServiceInput, Sport, useCreateServiceMutation } from "schema";
import ImageInput from "../ImageInput";
import useUser from "../../../Hooks/useUser";
import { uploadFile } from "../../../Firebase";
type ServiceFormProps = {
  onSubmit: () => void;
};
const sports = Object.values(Sport);
const ServiceForm = ({ onSubmit }: ServiceFormProps) => {
  const { user } = useUser();
  const [fileBlob, setFileBlob] = useState<File>();
  const [newService, setNewService] = useState({
    name: "",
    sport: "",
    description: "",
    sportCenterId: user?.uid,
    image: "",
  });
  const [createServiceMutation, status] = useCreateServiceMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameImage = "services/" + fileBlob?.name;
    const inputAux = {
      ...newService,
      image: nameImage,
    } as CreateServiceInput;
    createServiceMutation({
      variables: { input: inputAux },
      onCompleted: async (data) => {
        try {
          await uploadFile(fileBlob!, data.createService?.image!);
        } catch (error) {
          console.log("error upload: ", error);
        }
        // onSubmit(); // fucn to close
      },
      onError: (err) => {
        console.log(err);
      },
    });
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
        fileBlob={fileBlob}
        setFileBlob={setFileBlob}
      ></ImageInput>
      <CustomButton
        title="crear servicio"
        color="sucessfull"
        type="submit"
        disable={status.loading}
        onClick={() => console.log(newService)}
      />
    </form>
  );
};

export default ServiceForm;
