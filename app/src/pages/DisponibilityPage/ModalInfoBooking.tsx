import { IonContent, IonModal, useIonToast } from "@ionic/react";
import React, { useRef } from "react";
import {
  CreateReservationInput,
  useCreateReservationUserMutation,
} from "schema";
import {
  Background,
  CommonTag,
  CustomButton,
  Header,
} from "src/components/atomos";
import { ExampleInfoBookings } from "src/data";

const ModalInfoBooking = () => {
  const ref = useRef<HTMLIonModalElement>(null);
  const [present] = useIonToast();
  const [createReservationInputMutation, { data, loading }] =
    useCreateReservationUserMutation();
  return (
    <IonModal trigger="modal-info-booking" ref={ref}>
      <Header
        title="Datos de la Reservacion"
        dismiss={() => ref.current?.dismiss()}
      />
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
            {data === undefined ? (
              <CustomButton
                title="CONFIRMAR RESERVACION"
                color="sucessfull"
                type="button"
                id="modal-payment"
                disable={loading}
                loading={loading}
                onClick={() => {
                  //TODO create reservation
                  const input = {
                    date: "",
                    paymentId: "",
                    paymentPhoto: "",
                    rangeHour: "",
                    reservationPrice: 22,
                    serviceId: "",
                    state: false,
                    userId: "",
                  } as unknown as CreateReservationInput;
                  // verify type to send mutation
                  createReservationInputMutation({
                    variables: { input },
                    onCompleted: () => {
                      present({
                        message: "Reservacion realizada exitosamente",
                        duration: 1500,
                        color: "success",
                        position: "top",
                      });
                    },
                    onError: (error) => {
                      present({
                        message:
                          "No se pudo realizar la reservacion " + error.message,
                        duration: 1500,
                        color: "danger",
                        position: "top",
                      });
                    },
                  });
                }}
              />
            ) : (
              <div className="flex flex-col gap-4">
                <CustomButton
                  color="sucessfull"
                  title="Realizar pago"
                  type="button"
                  onClick={() => {}}
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
