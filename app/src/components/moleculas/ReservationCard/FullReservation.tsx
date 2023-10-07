import React, { useRef, useState } from "react";

import { IonAlert, IonContent, IonModal, useIonRouter } from "@ionic/react";
import {
  Background,
  CommonTag,
  CustomButton,
  Header,
} from "src/components/atomos";
import ReviewModal from "./ReviewModal";
import { covertDateToStringEs } from "src/utils";
import { useDeleteReservationMutation } from "schema";
type FullServiceProps = {
  reservationId: string;
  serviceName: string;
  sportCenterName: string;
  rangeHour: string[];
  reservationPrice: number;
  state: boolean;
  date: string;
  paymentId: string;
  refetch: () => void;
};
const FullReservation = ({
  reservationId,
  sportCenterName,
  serviceName,
  rangeHour,
  state,
  date,
  reservationPrice,
  refetch,
}: FullServiceProps) => {
  const ref = useRef<HTMLIonModalElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteReservation] = useDeleteReservationMutation();
  const ionRouter = useIonRouter();
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
            <CommonTag title="Fecha:" data={covertDateToStringEs(date)} />
            {rangeHour.map((hour, index) => {
              return <CommonTag title="Horario" data={hour} key={index} />;
            })}
            <CommonTag
              title="Precio:"
              data={`$ ${reservationPrice.toString()}`}
            />
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
                    onClick={() => {
                      ionRouter.push("payment/aquiponerdatos");
                    }}
                  />
                  <CustomButton
                    color="cancel"
                    title="cancelar Reservación"
                    type="button"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  />
                </>
              )}
            </div>
          </div>
          <IonAlert
            isOpen={isOpen}
            header="Seguro que desea cancelar la reservación?"
            buttons={[
              {
                text: "Cancel",
                role: "cancel",
                handler: () => {
                  setIsOpen(false);
                },
              },
              {
                text: "Aceptar",
                role: "confirm",
                handler: () => {
                  deleteReservation({
                    variables: { reservationId: reservationId },
                    onCompleted: () => {
                      ref.current?.dismiss();
                      refetch();
                    },
                  });
                },
              },
            ]}
          ></IonAlert>
        </Background>
        <ReviewModal />
      </IonContent>
    </IonModal>
  );
};

export default FullReservation;
