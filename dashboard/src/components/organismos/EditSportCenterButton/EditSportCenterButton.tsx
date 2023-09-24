import React, { useState } from "react";
import { CustomButton } from "../../atomos";
import { EditSportCenterForm, Modal } from "../../moleculas";
import { ProfileProps } from "../../moleculas/EditSportCenterForm/EditSportCenterForm";

const EditSportCenterButton = (sportCenterData: ProfileProps) => {
  const [modal, setModal] = useState(false);
  const [sportCenter, setSportCenter] = useState<ProfileProps>(sportCenterData);
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
