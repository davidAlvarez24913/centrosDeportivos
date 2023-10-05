import { IonPage, IonContent } from "@ionic/react";
import React from "react";
import { Background, CustomInput, Header } from "src/components/atomos";
import { ReservationCard } from "src/components/moleculas";
import { myReservations } from "src/data";
const MyReservationsPage = () => {
  return (
    <IonPage>
      <Header title="Reservaciones" path="/"></Header>
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 mt-5 justify-center">
            <CustomInput type="text" placeholder="Buscar"></CustomInput>
            <div className="flex flex-col gap-3">
              {myReservations.map((reservation) => {
                return (
                  <ReservationCard
                    reservationId={reservation.key.toString()}
                    sportCenterName={reservation.titleSportCenter}
                    serviceName={reservation.nameService}
                    rangeHour={[reservation.rangeHour]}
                    state={reservation.paymentStatus}
                    date="miercoles"
                    paymentId="123123"
                    reservationPrice="12"
                    key={reservation.key}
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
