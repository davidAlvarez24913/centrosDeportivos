import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import {
  Background,
  CustomButton,
  CustomInput,
  Header,
} from "src/components/atomos";

const RegisterPage = () => {
  return (
    <IonPage>
      <Header title="Registro" path="/" />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-5 py-5">
            <CustomInput typeInput="text" placeholder="Nombre" />
            <CustomInput typeInput="text" placeholder="Cedula/Pasaporte" />
            <CustomInput typeInput="text" placeholder="Telefono" />
            <CustomInput typeInput="text" placeholder="Correo electronico" />
            <CustomInput typeInput="password" placeholder="Contraseña" />
            <CustomInput
              typeInput="password"
              placeholder="Confirma contraseña"
            />
            <CustomButton
              color="sucessfull"
              title="REGISTRARSE"
              onClick={() => {}}
            />
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
