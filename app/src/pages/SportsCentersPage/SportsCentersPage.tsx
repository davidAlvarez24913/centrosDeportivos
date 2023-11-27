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
const SportsCentersPage = () => {
  const { data, loading, refetch } = useListSportCentersQuery();

  const sportsCenters =
    data?.listSportCenters
      ?.filter((sp, index) => {
        const flagAccess = sp.access === true;
        // const flagSuperUser = sp.superUser !== true;
        if (flagAccess) {
          return sp;
        }
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
          ) : (
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
          )}
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default SportsCentersPage;
