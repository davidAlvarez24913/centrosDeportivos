import React, { useState } from "react";
import { Modal, Navbar, SportCenterForm } from "../components/moleculas";
import { accounts } from "../data";
import { AccountSection } from "../components/organismos";
const ProfilePage = () => {
  const newUser = true;
  const [modal, setModal] = useState(newUser);

  return (
    <div className="flex flex-row justify-between">
      <Navbar nameSportCenter="La Pampita" />
      <div className="flex flex-row w-4/5 mt-20 mx-10 justify-between">
        <div className="w-2/3">Aqui poner contenido de perfil xd</div>
        <div className="w-1/3">
          <AccountSection accounts={accounts} />
        </div>
      </div>
      {newUser && (
        <Modal
          title={"Crear Centro Deportivo"}
          modalState={modal}
          closeModal={() => {}}
          cantClose
        >
          <SportCenterForm
            onSubmit={() => {
              setModal(false);
            }}
          />
        </Modal>
      )}
    </div>
  );
};
export default ProfilePage;
