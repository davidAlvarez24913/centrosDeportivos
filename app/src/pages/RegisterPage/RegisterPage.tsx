import React, { useState } from "react";
import { IonAlert, IonContent, IonPage } from "@ionic/react";
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
  const [alert, setAlert] = useState({ state: true, msg: "" });
  const { handleCreateUser, handleDeleteUser } = useUser();
  const [createUserMutation] = useCreateUserMutation();
  const [registData, setRegistData] = useState({
    name: "",
    id: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registData);
    handleCreateUser(registData.email, registData.password)
      .then((userCredential) => {
        const userId = userCredential?.user.uid;
        const user = {
          userId: userId!,
          name: registData.name,
          id: registData.id,
          phone: registData.phone,
          email: registData.email,
          image: "",
        };
        createUserMutation({
          variables: { input: user },
        })
          .then(() => {
            setAlert({ state: true, msg: "Usuario creado correctamente" });
          })
          .catch((error) => {
            console.log(error);
            handleDeleteUser();
          });
      })
      .catch((error) => {
        console.log(error.code);
        error.code === "auth/email-already-in-use" &&
          setAlert({ state: true, msg: "Correo electronico ya registrado" });
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
          <form className="flex flex-col gap-5 py-5" onSubmit={handleSubmit}>
            <CustomInput
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
              required
            />
            <CustomInput
              type="text"
              name="id"
              placeholder="Cedula/Pasaporte"
              onChange={handleChange}
              required
            />
            <CustomInput
              type="text"
              name="phone"
              placeholder="Telefono"
              maxLength={10}
              onChange={handleChange}
              required
            />
            <CustomInput
              type="email"
              name="email"
              placeholder="Correo electronico"
              onChange={handleChange}
              required
            />
            <CustomInputWithIcon
              isPassword
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
              required
              errorMessage={
                flag2 ? "La contraseña debe tener minimo 6 caracteres" : ""
              }
            />
            <CustomInputWithIcon
              isPassword
              type="password"
              name="confirmPassword"
              placeholder="Confirma contraseña"
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
            {alert && (
              <IonAlert
                header="Error"
                subHeader="Error al registrarse"
                message={alert.msg}
                buttons={["OK"]}
                onDidDismiss={() => setAlert({ state: false, msg: "" })}
              ></IonAlert>
            )}
          </form>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
