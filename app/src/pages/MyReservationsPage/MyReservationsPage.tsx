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
            <CustomInput typeInput="text" placeholder="Buscar"></CustomInput>
            <div className="flex flex-col gap-3">
              {myReservations.map((reservation) => {
                return (
                  <ReservationCard
                    nameSportCenter={reservation.titleSportCenter}
                    nameService={reservation.nameService}
                    rangeHour={reservation.rangeHour}
                    paymentStatus={reservation.paymentStatus}
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
