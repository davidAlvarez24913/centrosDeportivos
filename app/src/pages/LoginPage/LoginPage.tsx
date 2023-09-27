import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import React from "react";
import {
  Background,
  CustomButton,
  CustomInput,
  Header,
} from "src/components/atomos";

const LoginPage = () => {
  const ionRouter = useIonRouter();
  return (
    <IonPage>
      <Header title="Iniciar Sesion" path="/" />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-5 py-5">
            <CustomInput type="text" placeholder="Correo electronico" />
            <CustomInput type="password" placeholder="Contraseña" />
            <CustomButton
              color="sucessfull"
              title="INICIAR SESION"
              onClick={() => {
                //TODO logic
              }}
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
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
