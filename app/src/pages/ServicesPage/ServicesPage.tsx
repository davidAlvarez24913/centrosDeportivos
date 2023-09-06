import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import { Background, CustomInput, Header } from "src/components/atomos";
import { ServiceCard } from "src/components/moleculas";
import { services } from "src/data";
const ServicesPage = () => {
  const { sport } = useParams<{ sport: string }>();

  return (
    <IonPage>
      <Header title={`Servicios de: ${sport}`} path="/sports" />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 mt-5 justify-center">
            <CustomInput typeInput="text" placeholder="Buscar" />
            <div className="flex flex-col gap-3">
              {services.map((service) => {
                return (
                  <ServiceCard
                    key={service.serviceId}
                    {...service}
                    showSportCenter
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

export default ServicesPage;
