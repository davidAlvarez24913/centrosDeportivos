import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useGetSportCenterWithServicesQuery } from "schema";
import { Background, Header, Loading } from "src/components/atomos";
import NoDataCard from "src/components/atomos/NoDataCard";
import {
  Segment,
  ServiceCard,
  SportCenterInformation,
} from "src/components/moleculas";
import { reviews } from "src/data";

const SportCenterPage = () => {
  const { sportCenterId } = useParams<{ sportCenterId: string }>();

  const { data, loading } = useGetSportCenterWithServicesQuery({
    variables: { sportCenterId: sportCenterId },
  });
  const sportCenter = data?.getSportCenterWithServices;
  const services =
    sportCenter?.services?.map((service) => {
      return { ...service!, image: "" };
    }) || [];

  const [segment, setSegment] = useState<"servicios" | "informacion">(
    "servicios"
  );
  return (
    <IonPage>
      <Header title={sportCenter?.name || ""} path="/sportsCenters" />
      <Segment
        segment={segment}
        segmentList={["servicios", "informacion"]}
        setSegment={(value: string) => {
          setSegment(value as "servicios" | "informacion");
        }}
      />
      <IonContent>
        <Background>
          {loading ? (
            <Loading />
          ) : (
            <>
              {segment === "servicios" ? (
                services.length > 1 ? (
                  <div className="flex flex-col gap-3 mt-5 justify-center">
                    {services.map((service) => {
                      return (
                        <ServiceCard
                          key={service.serviceId}
                          {...service}
                          sportCenter={sportCenterId}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <NoDataCard>No hay servicios por el momento</NoDataCard>
                )
              ) : (
                <SportCenterInformation {...sportCenter!} reviews={reviews} />
              )}
            </>
          )}
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default SportCenterPage;
