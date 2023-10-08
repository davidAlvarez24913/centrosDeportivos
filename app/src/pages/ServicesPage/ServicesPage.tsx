import { IonContent, IonPage } from "@ionic/react";
import React from "react";
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

  const { data, loading } = useListServicesBySportQuery({
    variables: { sport: sport as Sport },
  });
  const services = data?.listServicesBySport?.map((services) => {
    return { ...services! };
  });

  return (
    <IonPage>
      <Header title={`Servicios de: ${sport}`} path="/sports" />
      <IonContent>
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
