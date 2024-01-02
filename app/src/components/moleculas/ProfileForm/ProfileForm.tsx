import { IonAlert, useIonRouter } from "@ionic/react";
import React, { useState } from "react";
import {
  UpdateUserInput,
  UpdateUserMutation,
  useUpdateUserMutation,
} from "schema";
import { CustomButton, CustomInput } from "src/components/atomos";

type ProfileFormProps = {
  userId: string;
  name: string;
  id: string;
  birthDate: string;
  phone: string;
  email: string;
};
const ProfileForm = ({
  userId,
  name,
  id,
  birthDate,
  phone,
  email,
}: ProfileFormProps) => {
  const ionRouter = useIonRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    userId: userId,
    name: name,
    id: id,
    birthDate: birthDate,
    phone: phone,
    email: email,
  });
  const [updateUserMutation] = useUpdateUserMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(true);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <div className="flex flex-col gap-3 p-5">
      <form className="flex flex-col gap-3 py-5" onSubmit={handleSubmit}>
        <CustomInput
          label="Nombre"
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Nombre"
          onChange={handleChange}
          required
        />
        <CustomInput
          label="Cedula/Pasaporte"
          type="text"
          name="id"
          defaultValue={id}
          placeholder="Cedula/Pasaporte"
          onChange={handleChange}
          required
        />
        <CustomInput
          label="Fecha de nacimiento"
          type="date"
          name="birthDate"
          defaultValue={birthDate}
          onChange={handleChange}
          required
        />
        <CustomInput
          label="Telefono"
          type="text"
          name="phone"
          defaultValue={phone}
          placeholder="Telefono"
          maxLength={10}
          onChange={handleChange}
          required
        />
        <CustomButton color="sucessfull" title="Editar" type="submit" />
        <CustomButton
          color="cancel"
          title="Cancelar"
          type="button"
          onClick={() => {
            ionRouter.push("/profile");
          }}
        />
        <IonAlert
          isOpen={isOpen}
          header="Seguro que desea editar la informacion!"
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                setIsOpen(false);
              },
            },
            {
              text: "Aceptar",
              role: "confirm",
              handler: () => {
                updateUserMutation({ variables: { input: userData } }).then(
                  () => {
                    setIsOpen(false);
                    ionRouter.push("/profile");
                  }
                );
              },
            },
          ]}
        ></IonAlert>
      </form>
    </div>
  );
};

export default ProfileForm;
