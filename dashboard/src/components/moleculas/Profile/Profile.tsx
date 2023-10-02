import React from "react";
import { getStringUrl } from "../../../utils";

export type ProfileProps = {
  name: string;
  description: string;
  ubication: string;
  phone: string;
  email: string;
  image: string;
};
const Profile = ({
  name,
  description,
  ubication,
  phone,
  email,
  image,
}: ProfileProps) => {
  return (
    <div className="flex flex-col gap-4 py-5">
      <img
        className="w-80 "
        src={image !== "" ? image : "/default-image.jpg"}
        alt="Imagen Centro Deportivo"
      />
      <h2 className="text-lg font-bold">Nombre del Centro Deportivo:</h2>
      <p className="text-base">{name}</p>
      <h2 className="text-lg font-bold">Descripción:</h2>
      <p className="text-base">{description}</p>
      <h2 className="text-lg font-bold">Ubicación:</h2>
      <p className="text-base">{ubication}</p>
      <h2 className="text-lg font-bold">Teléfono:</h2>
      <p className="text-base">{phone}</p>
      <h2 className="text-lg font-bold">Correo Electrónico:</h2>
      <p className="text-base">{email}</p>
    </div>
  );
};

export default Profile;
