import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import {
  Background,
  CommonTag,
  CustomButton,
  Header,
} from "src/components/atomos";
import { useParams } from "react-router";
import { ExampleInfoBookings } from "src/data";
import ReviewModal from "./ReviewModal";
const InfoBookingsPage = () => {
  const { reservationId } = useParams<{ reservationId: string }>();
  console.log(reservationId);
  return (
    <IonPage>
      <Header title="Datos de la Reservacion" path="/myreservations" />
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

            {!ExampleInfoBookings.paymentStatus && (
              <>
                <CustomButton
                  title="REALIZAR PAGO"
                  color="sucessfull"
                  type="button"
                  onClick={() => {}}
                />
                <CustomButton
                  title="CANCELAR RESSERVACION"
                  color="cancel"
                  type="button"
                  onClick={() => {}}
                />
              </>
            )}
            {ExampleInfoBookings.paymentStatus && (
              <CustomButton
                title="CALIFICAR SERVICIO"
                color="sucessfull"
                type="button"
                onClick={() => {}}
                id="review-modal"
              />
            )}
          </div>
        </Background>
      </IonContent>
      <ReviewModal />
    </IonPage>
  );
};

export default InfoBookingsPage;
