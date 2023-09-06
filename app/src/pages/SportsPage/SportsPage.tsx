import { IonContent, IonPage, IonRoute, useIonRouter } from "@ionic/react";
import React from "react";
import { Background, CustomInput, Header } from "src/components/atomos";
import { MenuCard } from "src/components/moleculas";
import { Sport } from "schema";
const SportsPage = () => {
  const ionRouter = useIonRouter();
  return (
    <IonPage>
      <Header title="Seleccione un deporte" path="/home" />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 mt-5 justify-center">
            <CustomInput typeInput="text" placeholder="Buscar"></CustomInput>
            <div className="flex flex-col gap-3">
              {Object.values(Sport).map((sport) => {
                return (
                  <MenuCard
                    key={sport}
                    title={sport}
                    iconPath={`assets/icon/${sport}.svg`}
                    onClick={() => {
                      ionRouter.push(`/services/${sport}`);
                    }}
                  ></MenuCard>
                );
              })}
            </div>
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default SportsPage;
