import React, { useState } from "react";
import {
  IonAlert,
  IonContent,
  IonPage,
  useIonRouter,
  useIonToast,
} from "@ionic/react";
import {
  Background,
  CustomButton,
  CustomInput,
  CustomInputWithIcon,
  Header,
} from "src/components/atomos";
import { useCreateUserMutation } from "schema";
import useUser from "src/Hooks/useUser";
const RegisterPage = () => {
  const { handleCreateUser, handleDeleteUser } = useUser();
  const [present] = useIonToast();
  const router = useIonRouter();
  const [createUserMutation] = useCreateUserMutation();
  const [registData, setRegistData] = useState({
    name: "",
    id: "",
    birthDate: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreateUser(registData.email, registData.password)
      .then((userCredential) => {
        const userId = userCredential?.user.uid;
        const user = {
          userId: userId!,
          name: registData.name,
          id: registData.id,
          birthDate: registData.birthDate,
          phone: registData.phone,
          email: registData.email,
        };
        createUserMutation({
          variables: { input: user },
        })
          .then(() => {
            present({
              message: "Usuario creado correctamente",
              duration: 1500,
              color: "success",
              position: "top",
            }).then(() => {
              router.push("/login");
            });
          })
          .catch((error) => {
            console.log(error);
            present({
              message: "No se pudo crear usuario, intentalo más tarde",
              duration: 1500,
              color: "danger",
              position: "top",
            });
            handleDeleteUser();
          });
      })
      .catch((error) => {
        console.log(error.code);
        error.code === "auth/email-already-in-use" &&
          present({
            message: "Correo electrónico ya registrado",
            duration: 1500,
            color: "warning",
            position: "top",
          });
      });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistData({ ...registData, [event.target.name]: event.target.value });
  };
  const flag = registData.password !== registData.confirmPassword;
  const flag2 = registData.password.length < 6;
  return (
    <IonPage>
      <Header title="Registro" path="/login" />
      <IonContent>
        <Background>
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
              label="Cédula/Pasaporte"
              type="text"
              name="id"
              placeholder="Cédula/Pasaporte"
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
              label="Teléfono"
              type="text"
              name="phone"
              placeholder="Teléfono"
              maxLength={10}
              onChange={handleChange}
              required
            />
            <CustomInput
              label="Correo electrónico"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              onChange={handleChange}
              required
            />
            <CustomInputWithIcon
              label="Contraseña"
              isPassword
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
              required
              errorMessage={
                flag2 ? "La contraseña debe tener mínimo 6 caracteres" : ""
              }
            />
            <CustomInputWithIcon
              label="Confirmar Contraseña"
              isPassword
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              onChange={handleChange}
              required
              errorMessage={flag ? "Las contraseñas deben coincidir" : ""}
            />
            <CustomButton
              color="sucessfull"
              title="REGISTRARSE"
              type="submit"
              disable={flag || flag2}
            />
          </form>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
