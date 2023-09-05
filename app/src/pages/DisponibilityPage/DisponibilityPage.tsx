import { IonContent, IonPage } from "@ionic/react";
import React, { useRef } from "react";
import { Background, CustomButton, Header } from "src/components/atomos";
import { BodyDisponibility } from "src/components/organismos";
import ModalInfoBooking from "./ModalInfoBooking";
import ModalPayment from "./ModalPayment";

const DisponibilityPage = () => {
  return (
    <IonPage>
      <Header title="xxx" />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-4 py-4">
            <h1>name service</h1>
            <h2>price autocalculated</h2>
            <h1>Fecha</h1>
            <BodyDisponibility></BodyDisponibility>
          </div>
          <CustomButton
            color="sucessfull"
            type="button"
            title="RESERVAR"
            id="modal-info-booking"
          />
        </Background>
      </IonContent>
      <ModalInfoBooking />
    </IonPage>
  );
};

export default DisponibilityPage;
