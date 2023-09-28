import React, { useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  CustomTextarea,
} from "../../atomos";
import {
  Service,
  Sport,
  UpdateDisponibilityInput,
  UpdateServiceInput,
} from "schema";
import ImageInput from "../ImageInput";
import { cleanTypenameDisponibility, getStringUrl } from "../../../utils";
import useUser from "../../../Hooks/useUser";

type ModalEditServiceProps = {
  onUpdate: (input: UpdateServiceInput) => void;
  service: Omit<
    Service,
    "ranking" | "reservations" | "sportCenterId" | "__typename"
  >;
};
const sports = Object.values(Sport);
const ModalEditService = ({ onUpdate, service }: ModalEditServiceProps) => {
  const { user } = useUser();
  const [serviceToUpdate, setserviceToUpdate] = useState({
    name: service.name,
    sport: service.sport,
    description: service.description,
    image: service.image,
  });
  const [fileBlob, setFileBlob] = useState<string>(serviceToUpdate.image!);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const disp = cleanTypenameDisponibility({
      ...serviceToUpdate,
      disponibility: service.disponibility as UpdateDisponibilityInput,
      serviceId: service.serviceId,
      image: fileBlob,
    } as Service);

    onUpdate({
      ...serviceToUpdate,
      disponibility: disp,
      serviceId: service.serviceId,
      sportCenterId: user?.uid!,
      image: fileBlob,
    } as UpdateServiceInput);
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
        value={serviceToUpdate.name}
        onChange={(e) =>
          setserviceToUpdate({
            ...serviceToUpdate,
            name: e.currentTarget.value,
          })
        }
      />
      <CustomTextarea
        color="blue"
        label="Descripción"
        defaultValue={serviceToUpdate.description}
        onChange={(e) => {
          setserviceToUpdate({
            ...serviceToUpdate,
            description: e.currentTarget.value,
          });
        }}
      />
      <CustomSelect
        color="blue"
        sports={sports}
        name="sport"
        label="Deporte"
        value={serviceToUpdate.sport}
        onChange={(e) =>
          setserviceToUpdate({
            ...serviceToUpdate,
            sport: e.currentTarget.value as Sport,
          })
        }
      />
      <ImageInput
        label="agregar imagen del servicio"
        fileBlob={
          fileBlob === null || fileBlob === undefined
            ? ""
            : getStringUrl(fileBlob)
        }
        setFileBlob={setFileBlob}
      ></ImageInput>
      <CustomButton
        title="Actualizar Servicio"
        color="sucessfull"
        type="submit"
      />
    </form>
  );
};

export default ModalEditService;
