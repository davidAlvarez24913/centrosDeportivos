import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Background, Header } from "src/components/atomos";
import {
  Segment,
  ServiceCard,
  SportCenterInformation,
} from "src/components/moleculas";
import { services, sportsCenters, reviews } from "src/data";

const SportCenterPage = () => {
  const { id } = useParams<{ id: string }>();
  const sportCenterId = id.slice(1);
  const [segment, setSegment] = useState<"servicios" | "informacion">(
    "servicios"
  );
  return (
    <IonPage>
      <Header title={sportCenterId} path="/sportsCenters" />
      <Segment
        segment={segment}
        segmentList={["servicios", "informacion"]}
        setSegment={(value: string) => {
          setSegment(value as "servicios" | "informacion");
        }}
      />
      <IonContent>
        <Background>
          {segment === "servicios" ? (
            <div className="flex flex-col gap-3 mt-5 justify-center">
              {services.map((service) => {
                return <ServiceCard key={service.serviceId} {...service} />;
              })}
            </div>
          ) : (
            <SportCenterInformation {...sportsCenters[1]} reviews={reviews} />
          )}
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default SportCenterPage;
