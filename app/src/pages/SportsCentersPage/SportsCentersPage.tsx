import React, { useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";
import { useListSportCentersQuery } from "schema";
import {
  Background,
  CustomInput,
  Header,
  Loading,
} from "src/components/atomos";
import { SportCenterCard } from "src/components/moleculas";
import NoDataCard from "src/components/atomos/NoDataCard";
const SportsCentersPage = () => {
  const { data, loading, refetch } = useListSportCentersQuery();

  const sportsCenters =
    data?.listSportCenters
      ?.filter((sp, index) => {
        if (sp.isSuscribed === true) return sp;
      })
      .map((sportCenter) => {
        return { ...sportCenter! };
      }) || [];
  useEffect(() => {
    refetch();
  }, []);
  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    setTimeout(() => {
      refetch();
      event.detail.complete();
    }, 2000);
  };
  return (
    <IonPage>
      <Header title={`Centros Deportivos`} path="/home" />
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <Background>
          {loading ? (
            <Loading />
          ) : sportsCenters.length > 0 ? (
            <div className="flex flex-col gap-3 mt-5 justify-center">
              {/* <CustomInput type="text" placeholder="Buscar" /> */}
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
          ) : (
            <NoDataCard>No hay centros deportivos</NoDataCard>
          )}
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default SportsCentersPage;
