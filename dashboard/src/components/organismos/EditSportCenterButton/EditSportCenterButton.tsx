import React, { useState } from "react";
import { CustomButton } from "../../atomos";
import { EditSportCenterForm, Modal } from "../../moleculas";
import { ProfileProps } from "../../moleculas/EditSportCenterForm/EditSportCenterForm";

const EditSportCenterButton = () => {
  const [modal, setModal] = useState(false);
  const [sportCenter, setSportCenter] = useState<ProfileProps>({
    name: "string",
    description: "string",
    ubication: "string",
    phone: "string",
    email: "string",
    image: "string",
  });

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
        <EditSportCenterForm
          sportCenter={sportCenter}
          setSportCenter={setSportCenter}
          onSubmit={() => {
            setModal(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default EditSportCenterButton;
