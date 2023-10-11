import React, { useState } from "react";
import { CustomButton, CustomInput, CustomTextarea } from "../../atomos";
import { ImageInput, Modal } from "../../moleculas";
import { UpdateSportCenterInput } from "schema";
import { ProfileProps } from "../../moleculas/Profile/Profile";

type EditSportCenterButtonProps = {
  updateSportCenter: (input: UpdateSportCenterInput) => void;
  sportCenterId: string;
} & ProfileProps;

const EditSportCenterButton = ({
  sportCenterId,
  name,
  description,
  email,
  phone,
  schedule,
  ubication,
  image,
  updateSportCenter,
}: EditSportCenterButtonProps) => {
  const [modal, setModal] = useState(false);
  const [newImage, setNewImage] = useState<string>(image);
  const [sportCenter, setSportCenter] = useState<UpdateSportCenterInput>({
    sportCenterId,
    name,
    description,
    email,
    phone,
    schedule,
    ubication,
    image,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(sportCenter);
    updateSportCenter({ ...sportCenter, image: newImage });
    alert("Datos de centro deportivo actualizados correctamente");
  };
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSportCenter({ ...sportCenter, [event.target.name]: event.target.value });
  };
  return (
    <div className="w-fit">
      <CustomButton
        title="Editar"
        color="blue"
        type="button"
        onClick={() => {
          setModal(true);
        }}
      />
      <Modal
        title={"Editar Centro Deportivo"}
        modalState={modal}
        closeModal={() => {
          setModal(false);
        }}
      >
        <form
          className="flex flex-col gap-3 py-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <ImageInput
            fileBlob={newImage}
            label="Agregar Imagen del Centro Deportivo"
            setFileBlob={setNewImage}
          />
          <CustomTextarea
            color="blue"
            label="Descripción"
            name="description"
            onChange={handleChange}
            defaultValue={description}
          />
          <CustomInput
            type="text"
            color="blue"
            name="ubication"
            label="Ubicación"
            defaultValue={ubication}
            onChange={handleChange}
          />
          <CustomInput
            type="text"
            color="blue"
            name="phone"
            label="Telefono"
            minLength={10}
            maxLength={10}
            defaultValue={phone}
            onChange={handleChange}
          />
          <CustomInput
            type="schedule"
            color="blue"
            name="schedule"
            label="Horario de atención"
            defaultValue={schedule}
            onChange={handleChange}
          />
          <CustomButton
            title="Editar Centro Deportivo"
            color="sucessfull"
            type="submit"
          />
        </form>
      </Modal>
    </div>
  );
};

export default EditSportCenterButton;
