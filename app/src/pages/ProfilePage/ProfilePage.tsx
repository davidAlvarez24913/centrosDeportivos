import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { Background, CommonTag, Header } from "src/components/atomos";

const ProfilePage = () => {
  return (
    <IonPage>
      <Header title={"Informacion de Perfil"} path="/" />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-5 p-5">
            <CommonTag data={"Davicho BT"} title="Nombre: " />
            <CommonTag data={"cedula aqui"} title="Cedula: " />
            <CommonTag data={"telofono aqui"} title="Telefono: " />
            <CommonTag data={"email here"} title="Correo Electronico: " />
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
