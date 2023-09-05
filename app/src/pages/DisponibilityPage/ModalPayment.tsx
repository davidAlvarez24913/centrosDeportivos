import { IonContent, IonModal } from "@ionic/react";
import React, { useRef } from "react";
import { Background, CustomButton, Header } from "src/components/atomos";

const ModalPayment = () => {
  const ref = useRef<HTMLIonModalElement>(null);

  return (
    <IonModal
      ref={ref}
      trigger="modal-payment"
      style={{ "--max-width": "350px", "--max-height": "350px" }}
    >
      <Header
        title="Su reservación ha sido realizada correctamente"
        dismiss={() => ref.current?.dismiss()}
      />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-4">
            <p>
              Seleccione “REALIZAR PAGO” para realizar el pago del servicio en
              este momento. Seleccione “PAGAR DESPUES” para realizar el pago
              luego de hacer uso del servicio.
            </p>
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
        </Background>
      </IonContent>
    </IonModal>
  );
};

export default ModalPayment;
