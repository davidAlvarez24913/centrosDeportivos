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
            <CustomInput type="text" placeholder="Nombre" required />
            <CustomInput type="text" placeholder="Cedula/Pasaporte" />
            <CustomInput type="text" placeholder="Telefono" />
            <CustomInput type="text" placeholder="Correo electronico" />
            <CustomInput type="password" placeholder="Contraseña" />
            <CustomInput type="password" placeholder="Confirma contraseña" />
            <CustomButton
              color="sucessfull"
              title="REGISTRARSE"
              onClick={() => {}}
              type="button"
            />
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
