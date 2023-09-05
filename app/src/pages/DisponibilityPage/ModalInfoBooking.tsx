import { IonContent, IonModal } from "@ionic/react";
import React from "react";
import {
  Background,
  CommonTag,
  CustomButton,
  Header,
} from "src/components/atomos";
import { ExampleInfoBookings } from "src/data";
import ModalPayment from "./ModalPayment";

const ModalInfoBooking = () => {
  return (
    <IonModal trigger="modal-info-booking">
      <Header title="Datos de la Reservacion" />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 py-4">
            <CommonTag
              title="Centro Deportivo:"
              data={ExampleInfoBookings.nameSportCenter}
            />
            <CommonTag
              title="Servicio:"
              data={ExampleInfoBookings.nameService}
            />
            <CommonTag title="Fecha:" data={ExampleInfoBookings.date} />
            <CommonTag title="Horario" data={ExampleInfoBookings.rangeHour} />
            <CommonTag
              title="Precio:"
              data={ExampleInfoBookings.price.toString()}
            />
            <CommonTag
              title="Estado de Pago"
              data={
                ExampleInfoBookings.paymentStatus === true
                  ? "Pagado"
                  : "Pendiente"
              }
            />

            <CustomButton
              title="CONFIRMAR RESERVACION"
              color="sucessfull"
              type="button"
              id="modal-payment"
              onClick={() => {
                //TODO create reservation
              }}
            />
          </div>
        </Background>
      </IonContent>
      <ModalPayment />
    </IonModal>
  );
};

export default ModalInfoBooking;
