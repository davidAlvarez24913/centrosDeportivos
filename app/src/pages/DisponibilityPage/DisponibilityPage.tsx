import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { Background, CustomButton, Header } from "src/components/atomos";
import { BodyDisponibility } from "src/components/organismos";
import ModalInfoBooking from "./ModalInfoBooking";
import { disponibility } from "src/data";
import { useParams } from "react-router";

const daysDisponibility = () => {
  let dateAux = new Date();
  // eslint-disable-next-line prefer-const
  let arrayDay = [{ date: dateAux.toUTCString(), available: true }];
  for (let i = 1; i < 7; i++) {
    const element = new Date(dateAux.setDate(dateAux.getDate() + i));
    arrayDay.push({ date: element.toUTCString(), available: false });
    dateAux = new Date();
  }

  return arrayDay;
};

const DisponibilityPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const [price, setPrice] = useState(0.0);
  const [days, setDays] = useState(daysDisponibility());
  const [hours, setHours] = useState<
    { rangeHour: string; available: boolean; price: number }[]
  >(
    disponibility.map((d) => {
      return { ...d, available: false };
    })
  );
  return (
    <IonPage>
      <Header title="xxx" />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-4 py-4">
            <h1>name service</h1>
            <h2>Valor total: ${price}</h2>
            <h1>Fecha</h1>
            <BodyDisponibility
              days={days}
              hours={hours}
              setDays={setDays}
              setHours={setHours}
              setPrice={setPrice}
            ></BodyDisponibility>
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
