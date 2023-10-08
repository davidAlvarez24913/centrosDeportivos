import { IonContent, IonPage, useIonRouter, useIonToast } from "@ionic/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import {
  BankAccount,
  useListBankAccountsBySportCenterNameQuery,
  useUpdateReservationMutation,
} from "schema";
import {
  Background,
  CustomButton,
  CustomInput,
  Header,
  Loading,
  PhotoPicker,
} from "src/components/atomos";
import { Accordion } from "src/components/moleculas";

const PaymentPage = () => {
  const [present] = useIonToast();
  const router = useIonRouter();

  const { serviceId, reservationId, sportCenterName } = useParams<{
    serviceId: string;
    reservationId: string;
    sportCenterName: string;
  }>();

  const [image, setImage] = useState<string>();
  const [filedPaymentId, setfiledPaymentId] = useState<string>();

  const { data, loading } = useListBankAccountsBySportCenterNameQuery({
    variables: { sportCenterName: sportCenterName },
  });

  const accounts = data?.listBankAccountsBySportCenterName?.map((account) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { __typename, name, bankAccountId, sportCenterId, ...rest } =
      account as BankAccount;
    return { ...rest, bankName: name };
  });
  const [updateReservationMutation] = useUpdateReservationMutation();
  const onUpdate = () => {
    updateReservationMutation({
      variables: {
        input: {
          reservationId: reservationId,
          image: image as string,
          paymentId: filedPaymentId as string,
        },
      },
      onCompleted: (data) => {
        present({
          message: data.updateReservation?.message,
          duration: 1500,
          color: "success",
          position: "top",
        });
        router.push("/myreservations");
      },
      onError: (error) => {
        present({
          message: "No se pudo realizar la reservacion " + error.message,
          duration: 1500,
          color: "danger",
          position: "top",
        });
      },
    });
  };
  return (
    <IonPage>
      <Header title="Forma de Pago" path="/home"></Header>
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="font-bold text-xl">Cuentas Bancarias</h2>
            <h2 className="font-bold text-xl">{sportCenterName}</h2>
            {loading ? (
              <Loading />
            ) : (
              <Accordion accounts={accounts}></Accordion>
            )}
            <p>Agrega el comprobante o el identificador de la transacción.</p>
            <h3 className="font-bold text-lg">
              Identificador de la transacción
            </h3>
            <CustomInput
              type="number"
              placeholder="000000000000"
              onInput={(e) => {
                setfiledPaymentId(e.currentTarget.value);
              }}
            />
            <PhotoPicker
              photo={image}
              setPhoto={(img) => {
                setImage(img);
              }}
            />
            <CustomButton
              title="enviar"
              color="sucessfull"
              type="submit"
              disable={image === undefined || filedPaymentId === undefined}
              onClick={onUpdate}
            />
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default PaymentPage;
