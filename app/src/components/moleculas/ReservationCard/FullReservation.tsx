import React, { useRef } from "react";

import { IonContent, IonModal, useIonRouter } from "@ionic/react";
import {
  Background,
  CommonTag,
  CustomButton,
  Header,
} from "src/components/atomos";
import ReviewModal from "./ReviewModal";
type FullServiceProps = {
  reservationId: string;
  serviceName: string;
  sportCenterName: string;
  rangeHour: string[];
  reservationPrice: string;
  state: boolean;
  date: string;
  paymentId: string;
};
const FullReservation = ({
  reservationId,
  sportCenterName,
  serviceName,
  rangeHour,
  state,
}: FullServiceProps) => {
  const ref = useRef<HTMLIonModalElement>(null);
  return (
    <IonModal ref={ref} trigger={`open-reservation-${reservationId}-modal`}>
      <Header
        title="Datos de la Reservación"
        dismiss={() => {
          ref.current?.dismiss();
        }}
      ></Header>
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 py-4">
            <CommonTag title="Centro Deportivo:" data={sportCenterName} />
            <CommonTag title="Servicio:" data={serviceName} />
            <CommonTag title="Fecha:" data={"2"} />
            {rangeHour.map((hour, index) => {
              return <CommonTag title="Horario" data={hour} key={index} />;
            })}
            <CommonTag title="Precio:" data={"2"} />
            <CommonTag
              title="Estado de Pago"
              data={state ? "Pagado" : "Pendiente"}
            />
            <div className="flex flex-col gap-4">
              {state ? (
                <CustomButton
                  color="sucessfull"
                  title="Calificar Servicio"
                  type="button"
                  id="review-modal"
                />
              ) : (
                <>
                  <CustomButton
                    color="sucessfull"
                    title="Realizar pago"
                    type="button"
                    onClick={() => {}}
                  />
                  <CustomButton
                    color="cancel"
                    title="cancelar Reservación"
                    type="button"
                    onClick={() => {}}
                  />
                </>
              )}
            </div>
          </div>
        </Background>
        <ReviewModal />
      </IonContent>
    </IonModal>
  );
};

export default FullReservation;
