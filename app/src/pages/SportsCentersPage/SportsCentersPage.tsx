import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import { useListSportCentersQuery } from "schema";
import {
  Background,
  CustomInput,
  Header,
  Loading,
} from "src/components/atomos";
import { SportCenterCard } from "src/components/moleculas";
const SportsCentersPage = () => {
  const { data, loading } = useListSportCentersQuery();

  const sportsCenters =
    data?.listSportCenters?.map((sportCenter) => {
      return { ...sportCenter! };
    }) || [];
  return (
    <IonPage>
      <Header title={`Centros Deportivos`} path="/home" />
      <IonContent>
        <Background>
          {loading ? (
            <Loading />
          ) : (
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
          )}
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default SportsCentersPage;
