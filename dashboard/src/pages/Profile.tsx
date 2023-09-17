import React, { useState } from "react";
import {
  LayoutPage,
  Modal,
  Profile,
  SportCenterForm,
} from "../components/moleculas";
import { accounts, sportsCenters } from "../data";
import {
  AccountSection,
  EditSportCenterButton,
} from "../components/organismos";

const ProfilePage = () => {
  const newUser = false;
  const [modal, setModal] = useState(newUser);
  return (
    <LayoutPage nameSportCenter="">
      <div className="flex ">
        <div className="w-2/3 flex flex-col ">
          <EditSportCenterButton {...sportsCenters[0]} />
          <Profile {...sportsCenters[0]} />
        </div>
        <div className="w-1/3">
          <AccountSection accounts={accounts} />
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
    </LayoutPage>
  );
};
export default ProfilePage;
