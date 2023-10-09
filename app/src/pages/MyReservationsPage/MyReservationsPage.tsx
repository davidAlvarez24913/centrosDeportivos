import { IonPage, IonContent } from "@ionic/react";
import React, { useEffect } from "react";
import { useListUserReservationsQuery } from "schema";
import useUser from "src/Hooks/useUser";
import {
  Background,
  CustomInput,
  Header,
  Loading,
} from "src/components/atomos";
import NoDataCard from "src/components/atomos/NoDataCard";
import { ReservationCard } from "src/components/moleculas";

const MyReservationsPage = () => {
  const { user } = useUser();
  const { data, refetch, loading } = useListUserReservationsQuery({
    variables: { userId: user?.uid || "" },
  });
  const reservations =
    data?.listUserReservations?.map((reservation) => reservation!) || [];

  useEffect(() => {
    refetch();
  }, []);

  return (
    <IonPage>
      <Header title="Reservaciones" path="/"></Header>
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 mt-5 justify-center">
            <CustomInput type="text" placeholder="Buscar"></CustomInput>
            <div className="flex flex-col gap-3">
              {loading ? (
                <Loading />
              ) : reservations.length > 0 ? (
                reservations.map((reservation, index) => {
                  return (
                    <ReservationCard
                      key={index}
                      {...reservation.reservation!}
                      sportCenterName={reservation.sportCenterName || ""}
                      sportCenterId={reservation.sportCenterId || ""}
                      serviceName={reservation.serviceName || ""}
                      refetch={refetch}
                    ></ReservationCard>
                  );
                })
              ) : (
                <NoDataCard>No tiene Reservaciones por el momento</NoDataCard>
              )}
            </div>
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default MyReservationsPage;
