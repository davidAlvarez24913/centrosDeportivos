import { IonContent, IonModal, useIonRouter } from "@ionic/react";
import React, { useRef } from "react";
import { CreateReservationUserMutation } from "schema";
import {
  Background,
  CommonTag,
  CustomButton,
  Header,
} from "src/components/atomos";
import { covertDateToStringEs } from "src/utils";

type PropsmModaInfoBooking = {
  hours: string[];
  price: number;
  date: string;
  serviceId: string;
  onCreateBooking: () => void;
  loading: boolean;
  data: CreateReservationUserMutation | null | undefined;
  sportCenter: string;
  nameService: string;
};

const ModalInfoBooking = ({
  hours,
  price,
  date,
  serviceId,
  onCreateBooking,
  data,
  loading,
  sportCenter,
  nameService,
}: PropsmModaInfoBooking) => {
  const ref = useRef<HTMLIonModalElement>(null);
  const router = useIonRouter();

  return (
    <IonModal trigger="modal-info-booking" ref={ref}>
      <Header
        title="Datos de la Reservacion"
        dismiss={() => ref.current?.dismiss()}
      />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 py-4">
            <CommonTag title="Centro Deportivo:" data={sportCenter} />
            <CommonTag title="Servicio:" data={nameService} />
            <CommonTag title="Fecha:" data={covertDateToStringEs(date)} />
            <div>
              <h2 className="text-primary text-xl">Horario:</h2>
              <div>
                {hours.map((h, index) => {
                  return <p key={index}>{index + 1 + ". " + h}</p>;
                })}
              </div>
            </div>
            <CommonTag title="Precio:" data={"$ " + price.toString()} />
            {data === undefined ? (
              <CustomButton
                title="CONFIRMAR RESERVACION"
                color="sucessfull"
                type="button"
                id="modal-payment"
                disable={loading}
                loading={loading}
                onClick={onCreateBooking}
              />
            ) : (
              <div className="flex flex-col gap-4">
                <CustomButton
                  color="sucessfull"
                  title="Realizar pago"
                  type="button"
                  onClick={() => {
                    const data = { sportce: price, hours: hours, date: date };
                    router.push(`/payment/${JSON.stringify(data)}`);
                  }}
                />
                <CustomButton
                  color="sucessfull"
                  title="pagar despues"
                  type="button"
                  onClick={() => {}}
                />
              </div>
            )}
          </div>
        </Background>
      </IonContent>
    </IonModal>
  );
};

export default ModalInfoBooking;
