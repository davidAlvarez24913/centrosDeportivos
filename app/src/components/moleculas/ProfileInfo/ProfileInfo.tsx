import { useIonRouter } from "@ionic/react";
import React from "react";
import { CommonTag, CustomButton } from "src/components/atomos";

type ProfileInfoProps = {
  name: string;
  id: string;
  birthDate: string;
  phone: string;
  email: string;
};
const ProfileInfo = ({
  name,
  id,
  birthDate,
  phone,
  email,
}: ProfileInfoProps) => {
  const ionRouter = useIonRouter();
  return (
    <div className="flex flex-col gap-3 p-5">
      <CommonTag data={name} title="Nombre: " />
      <CommonTag data={id} title="Cedula: " />
      <CommonTag data={birthDate} title="Fecha de nacimiento: " />
      <CommonTag data={phone} title="Telefono: " />
      <CommonTag data={email} title="Correo Electronico: " />
      <CustomButton
        title="Editar"
        color="sucessfull"
        type="button"
        onClick={() => {
          ionRouter.push("/editProfile");
        }}
      />
    </div>
  );
};

export default ProfileInfo;
