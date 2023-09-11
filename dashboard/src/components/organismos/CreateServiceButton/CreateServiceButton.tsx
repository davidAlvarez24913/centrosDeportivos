import React, { useState } from "react";
import { CustomButton } from "../../atomos";
import { Modal, ServiceForm } from "../../moleculas";

const CreateServiceButton = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <CustomButton
        title="crear servicio"
        color="blue"
        type="button"
        addIcon
        onClick={() => {
          setModal(true);
        }}
      />
      <Modal
        title={"Crear Cuenta Bancaria"}
        modalState={modal}
        closeModal={() => {
          setModal(false);
        }}
      >
        <ServiceForm
          onSubmit={() => {
            setModal(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default CreateServiceButton;
