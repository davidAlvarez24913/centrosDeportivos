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
import { ServiceCard } from "src/components/moleculas";
const ServicesPage = () => {
  const { sport } = useParams<{ sport: string }>();

  const { data, loading, refetch } = useListServicesBySportQuery({
    variables: { sport: sport as Sport },
  });
  const services = data?.listServicesBySport?.map((services) => {
    return { ...services! };
  });
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
          ) : (
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
          )}
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default ServicesPage;
