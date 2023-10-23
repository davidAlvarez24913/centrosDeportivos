import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import {
  useGetSportCenterQuery,
  useListReviewsBySportCenterQuery,
  useListServicesBySportCenterIdQuery,
} from "schema";
import { Background, Header, Loading } from "src/components/atomos";
import NoDataCard from "src/components/atomos/NoDataCard";
import {
  Segment,
  ServiceCard,
  SportCenterInformation,
} from "src/components/moleculas";

const SportCenterPage = () => {
  const { sportCenterId } = useParams<{ sportCenterId: string }>();

  const sportCenterData = useGetSportCenterQuery({
    variables: { sportCenterId: sportCenterId },
  });
  const servicesData = useListServicesBySportCenterIdQuery({
    variables: { sportCenterId: sportCenterId },
  });
  const reviewsData = useListReviewsBySportCenterQuery({
    variables: { sportCenterId: sportCenterId },
  });
  const sportCenter = sportCenterData.data?.getSportCenter;
  const information = {
    schedule: sportCenter?.schedule || "",
    ubication: sportCenter?.ubication || "",
    phone: sportCenter?.phone || "",
    sportCenter: sportCenter?.name || "",
  };
  const services =
    servicesData.data?.listServicesBySportCenterId?.map((service) => {
      return {
        ...service!,
      };
    }) || [];
  const reviews =
    reviewsData.data?.listReviewsBySportCenter?.map((review) => {
      return {
        ...review!,
      };
    }) || [];

  const [segment, setSegment] = useState<"servicios" | "información">(
    "servicios"
  );
  return (
    <IonPage>
      <Header title={sportCenter?.name || ""} path="/sportsCenters" />
      <Segment
        segment={segment}
        segmentList={["servicios", "información"]}
        setSegment={(value: string) => {
          setSegment(value as "servicios" | "información");
        }}
      />
      <IonContent>
        <Background>
          {sportCenterData.loading && servicesData.loading ? (
            <Loading />
          ) : (
            <>
              {segment === "servicios" ? (
                services.length >= 1 ? (
                  <div className="flex flex-col gap-3 mt-5 justify-center">
                    {services.map((service) => {
                      return (
                        <ServiceCard
                          key={service.serviceId}
                          {...service}
                          information={information}
                          sportCenter={sportCenter?.name || ""}
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
