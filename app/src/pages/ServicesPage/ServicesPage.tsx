import {
  IonContent,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Sport, useListServicesBySportQuery } from "schema";
import {
  Background,
  CustomInput,
  Header,
  Loading,
} from "src/components/atomos";
import NoDataCard from "src/components/atomos/NoDataCard";
import { ServiceCard } from "src/components/moleculas";
const ServicesPage = () => {
  const { sport } = useParams<{ sport: string }>();

  const { data, loading, refetch } = useListServicesBySportQuery({
    variables: { sport: sport as Sport },
  });
  const services =
    data?.listServicesBySport
      ?.filter((services) => {
        if (services?.sportCenter?.isSuscribed === true)
          return { ...services! };
      })
      .map((services) => {
        return { ...services! };
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
      <Header title={`Servicios de: ${sport}`} path="/sports" />
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <Background>
          {loading ? (
            <Loading />
          ) : services?.length > 0 ? (
            <div className="flex flex-col gap-3 mt-5 justify-center">
              <CustomInput type="text" placeholder="Buscar" />
              <div className="flex flex-col gap-3">
                {services?.map((service) => {
                  return (
                    <ServiceCard
                      key={service.service?.serviceId}
                      {...service.service!}
                      showSportCenter
                      sportCenter={service.sportCenter?.name || ""}
                      information={{
                        schedule: service.sportCenter?.schedule || "",
                        ubication: service.sportCenter?.ubication || "",
                        phone: service.sportCenter?.phone || "",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <NoDataCard>No hay servicios por el momento</NoDataCard>
          )}
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default ServicesPage;
