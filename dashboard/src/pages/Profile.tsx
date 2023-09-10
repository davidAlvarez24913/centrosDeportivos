import React from "react";
import { Navbar } from "../components/moleculas";
import { accounts } from "../data";
import AccountSection from "../components/organismos/AccountSection";
const ProfilePage = () => {
  return (
    <div className="flex flex-row justify-between">
      <Navbar nameSportCenter="La Pampita" />
      <div className="flex flex-row w-4/5 mt-20 mx-10 justify-between">
        <div className="w-2/3">Aqui poner contenido de perfil xd</div>
        <div className="w-1/3">
          <AccountSection accounts={accounts} />
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
