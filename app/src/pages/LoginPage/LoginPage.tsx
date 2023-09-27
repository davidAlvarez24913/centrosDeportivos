import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import React, { useState } from "react";
import { SignIn } from "src/Firebase";
import {
  Background,
  CustomButton,
  CustomInput,
  CustomInputWithIcon,
  Header,
} from "src/components/atomos";
const LoginPage = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const ionRouter = useIonRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SignIn(userInput.email, userInput.password)
      .then(() => {
        ionRouter.push("/");
      })
      .catch((error) => {
        error.code === "auth/user-not-found" &&
          console.log("Usuario incorrecto, intenta de nuevo!");
        error.code === "auth/invalid-email" && console.log("Email invalido");
        error.code === "auth/wrong-password" &&
          console.log("Contraseña incorrecta, intenta de nuevo!");
      });
    console.log(userInput);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  return (
    <IonPage>
      <Header title="Iniciar Sesion" path="/" />
      <IonContent>
        <Background>
          <form className="flex flex-col gap-5 py-5" onSubmit={handleSubmit}>
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
            />
            <CustomButton
              color="sucessfull"
              title="INICIAR SESION"
              type="submit"
            />
            <a href="/" className="text-center">
              Olvide mi contraseña
            </a>
            <CustomButton
              color="outline"
              title="REGISTRARSE"
              type="button"
              onClick={() => ionRouter.push("/register")}
            />
          </form>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
