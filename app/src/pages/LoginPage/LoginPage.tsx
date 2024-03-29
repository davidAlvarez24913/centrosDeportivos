import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import React, { useState } from "react";
import useUser from "src/Hooks/useUser";
import { FirebaseError } from "@firebase/util";

import {
  Background,
  CustomButton,
  CustomInput,
  CustomInputWithIcon,
  Header,
} from "src/components/atomos";
const LoginPage = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const ionRouter = useIonRouter();
  const { handleSignIn } = useUser();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSignIn(userInput.email, userInput.password)
      .then(() => {
        ionRouter.push("/");
      })
      .catch((error) => {
        setError((error as FirebaseError).code);
      });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  return (
    <IonPage>
      <Header title="Iniciar Sesión" path="/" />
      <IonContent>
        <Background>
          <form className="flex flex-col gap-3 py-5" onSubmit={handleSubmit}>
            <CustomInput
              label="Correo Electrónico"
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              onChange={handleChange}
              required
              errorMessage={
                error === "auth/user-not-found"
                  ? "Usuario incorrecto, intenta de nuevo!"
                  : error === "auth/invalid-email"
                  ? "Correo Electrónico no válido"
                  : ""
              }
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
                error === "auth/wrong-password"
                  ? "Contraseña incorrecta, intenta de nuevo!"
                  : ""
              }
            />
            <CustomButton
              color="sucessfull"
              title="INICIAR SESIÓN"
              type="submit"
            />
            <CustomButton
              color="outline"
              title="REGISTRARME"
              type="button"
              onClick={() => ionRouter.push("/register")}
            />
            <a href="/" className="text-center underline">
              Olvidé mi contraseña
            </a>
          </form>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
