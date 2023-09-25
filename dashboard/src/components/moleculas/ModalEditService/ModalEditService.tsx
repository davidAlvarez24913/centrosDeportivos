import React, { useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  CustomTextarea,
} from "../../atomos";
import { Service, Sport } from "schema";
import ImageInput from "../ImageInput";
import useUser from "../../../Hooks/useUser";
import { getImageNameBucket, getStringUrl } from "../../../utils";

type ModalEditServiceProps = {
  onUpdate: () => void;
  onRefetch: () => void;
  service: Omit<
    Service,
    "ranking" | "reservations" | "sportCenterId" | "__typename"
  >;
};
const sports = Object.values(Sport);
const ModalEditService = ({
  onUpdate,
  onRefetch,
  service,
}: ModalEditServiceProps) => {
  const { user } = useUser();
  const [serviceToUpdate, setserviceToUpdate] = useState({
    name: service.name,
    sport: service.sport,
    description: service.description,
    sportCenterId: user?.uid,
    image: service.image ? getStringUrl(service.image!) : undefined,
  });
  const [fileBlob, setFileBlob] = useState<string | undefined>(
    serviceToUpdate.image
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        fileBlob={fileBlob}
        setFileBlob={setFileBlob}
      ></ImageInput>
      <CustomButton
        title="Actualizar Servicio"
        color="sucessfull"
        type="submit"
        onClick={() => {
          console.log(serviceToUpdate);
          console.log(getImageNameBucket(service.image!));
        }}
      />
    </form>
  );
};

export default ModalEditService;
