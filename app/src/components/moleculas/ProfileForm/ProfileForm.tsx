import { useIonRouter } from "@ionic/react";
import React, { useState } from "react";
import { CommonTag, CustomButton, CustomInput } from "src/components/atomos";

type ProfileFormProps = {
  name: string;
  id: string;
  birthDate: string;
  phone: string;
  email: string;
};
const ProfileForm = ({
  name,
  id,
  birthDate,
  phone,
  email,
}: ProfileFormProps) => {
  const ionRouter = useIonRouter();
  const [registData, setRegistData] = useState({
    name: "",
    id: "",
    birthDate: "",
    phone: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registData);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistData({ ...registData, [event.target.name]: event.target.value });
  };
  return (
    <div className="flex flex-col gap-3 p-5">
      <form className="flex flex-col gap-3 py-5" onSubmit={handleSubmit}>
        <CustomInput
          label="Nombre"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          required
        />
        <CustomInput
          label="Cedula/Pasaporte"
          type="text"
          name="id"
          placeholder="Cedula/Pasaporte"
          onChange={handleChange}
          required
        />
        <CustomInput
          label="Fecha de nacimiento"
          type="date"
          name="birthDate"
          onChange={handleChange}
          required
        />
        <CustomInput
          label="Telefono"
          type="text"
          name="phone"
          placeholder="Telefono"
          maxLength={10}
          onChange={handleChange}
          required
        />
        <CustomInput
          label="Correo electronico"
          type="email"
          name="email"
          placeholder="Correo electronico"
          onChange={handleChange}
          required
        />

        <CustomButton color="sucessfull" title="REGISTRARSE" type="submit" />
      </form>
    </div>
  );
};

export default ProfileForm;
