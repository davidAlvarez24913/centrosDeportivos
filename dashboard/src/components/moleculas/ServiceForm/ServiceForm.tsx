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
import { toast } from "react-toastify";
type ServiceFormProps = {
  onSubmit: () => void;
};
const sports = Object.values(Sport);
const ServiceForm = ({ onSubmit }: ServiceFormProps) => {
  const { user } = useUser();
  const [fileBlob, setFileBlob] = useState<string>("");
  const [newService, setNewService] = useState({
    name: "",
    sport: "",
    description: "",
    sportCenterId: user?.uid,
  });
  const [createServiceMutation, status] = useCreateServiceMutation();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let inputAux = {
      ...newService,
      image: fileBlob,
    } as CreateServiceInput;
    inputAux.name &&
      inputAux.description &&
      inputAux.sport &&
      createServiceMutation({
        variables: { input: inputAux },
        onCompleted: () => {
          toast.success("Servicio creado!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          onSubmit();
        },
        onError: (err) => {
          console.log(err);
          toast.error("Error al crear servicio!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
        required
        onChange={(e) =>
          setNewService({ ...newService, name: e.currentTarget.value })
        }
      />
      <CustomTextarea
        color="blue"
        label="Descripción"
        required
        onChange={(e) => {
          setNewService({ ...newService, description: e.currentTarget.value });
        }}
      />
      <CustomSelect
        color="blue"
        sports={sports}
        name="sport"
        label="Deporte"
        required
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
      />
    </form>
  );
};

export default ServiceForm;
