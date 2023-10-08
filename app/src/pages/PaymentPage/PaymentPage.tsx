import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import { BankAccount, useListBankAccountsBySportCenterNameQuery } from "schema";
import {
  Background,
  CustomButton,
  CustomInput,
  Header,
  Loading,
  PhotoPicker,
} from "src/components/atomos";
import { Accordion } from "src/components/moleculas";
import { AccordionProps } from "src/components/moleculas/Accordion/Accordion";

const HomePage = () => {
  const { serviceId, reservationId, sportCenterName } = useParams<{
    serviceId: string;
    reservationId: string;
    sportCenterName: string;
  }>();

  const { data, loading } = useListBankAccountsBySportCenterNameQuery({
    variables: { sportCenterName: sportCenterName },
  });
  const accounts = data?.listBankAccountsBySportCenterName?.map((account) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { __typename, name, bankAccountId, sportCenterId, ...rest } =
      account as BankAccount;
    return { ...rest, bankName: name };
  });
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
            <CustomInput type="number" placeholder="000000000000" />
            <PhotoPicker photo={undefined} setPhoto={() => {}} />
            <CustomButton title="enviar" color="sucessfull" type="submit" />
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
