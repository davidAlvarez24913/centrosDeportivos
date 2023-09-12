import React from "react";
import { Navbar } from "../components/moleculas";
import { CreateServiceButton } from "../components/organismos";

const ServicesPage = () => {
  return (
    <div className="flex flex-row gap-20">
      <Navbar nameSportCenter="La Pampita" />
      <div className="flex flex-col w-2/3 mt-20 px-4">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-bold">Servicios</h2>
          <CreateServiceButton />
        </div>
      </div>
    </div>
  );
};
export default ServicesPage;
