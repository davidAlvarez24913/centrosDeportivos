import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { Background, CustomInput, Header } from "src/components/atomos";
import { SportCenterCard } from "src/components/moleculas";
import { sportsCenters } from "src/data";
const SportsCentersPage = () => {
  return (
    <IonPage>
      <Header title={`Centros Deportivos`} path="/home" />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 mt-5 justify-center">
            <CustomInput typeInput="text" placeholder="Buscar" />
            <div className="flex flex-col gap-3">
              {sportsCenters.map((sportCenter) => {
                return (
                  <SportCenterCard
                    key={sportCenter.sportCenterId}
                    {...sportCenter}
                  />
                );
              })}
            </div>
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default SportsCentersPage;
