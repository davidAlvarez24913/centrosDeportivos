import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import {
  Background,
  CustomButton,
  CustomInput,
  Header,
  PhotoPicker,
} from "src/components/atomos";
import { Accordion } from "src/components/moleculas";
import { accounts } from "src/data";

const HomePage = () => {
  const { info } = useParams<{
    info: string;
  }>();
  return (
    <IonPage>
      <Header title="Forma de Pago" path="/home"></Header>
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="font-bold text-xl">Cuentas Bancarias</h2>
            <h2 className="font-bold text-xl">{info}</h2>
            <Accordion accounts={accounts}></Accordion>
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
