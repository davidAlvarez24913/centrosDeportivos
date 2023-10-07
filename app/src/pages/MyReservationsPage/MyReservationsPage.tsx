import { IonPage, IonContent } from "@ionic/react";
import React from "react";
import { useListUserReservationsQuery } from "schema";
import useUser from "src/Hooks/useUser";
import { Background, CustomInput, Header } from "src/components/atomos";
import { ReservationCard } from "src/components/moleculas";

const MyReservationsPage = () => {
  const { user } = useUser();
  const { data } = useListUserReservationsQuery({
    variables: { userId: user?.uid || "" },
  });
  const reservations =
    data?.listUserReservations?.map((reservation) => reservation!) || [];
  return (
    <IonPage>
      <Header title="Reservaciones" path="/"></Header>
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 mt-5 justify-center">
            <CustomInput type="text" placeholder="Buscar"></CustomInput>
            <div className="flex flex-col gap-3">
              {reservations.map((reservation) => {
                return (
                  <ReservationCard
                    key={reservation.reservation?.reservationId}
                    {...reservation.reservation!}
                    sportCenterName={reservation.sportCenterName || ""}
                    serviceName={reservation.serviceName || ""}
                  ></ReservationCard>
                );
              })}
            </div>
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default MyReservationsPage;
