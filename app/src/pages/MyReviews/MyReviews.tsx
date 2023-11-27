import {
  IonPage,
  IonContent,
  RefresherEventDetail,
  IonRefresher,
  IonRefresherContent,
} from "@ionic/react";
import React, { useEffect } from "react";
import { useListReviewsByUserIdQuery } from "schema";
import useUser from "src/Hooks/useUser";
import { Background, Header, Loading } from "src/components/atomos";
import NoDataCard from "src/components/atomos/NoDataCard";

const MyReviews = () => {
  const userId = useUser().user?.uid;
  const { data, refetch, loading } = useListReviewsByUserIdQuery({
    variables: { userId: userId || "" },
  });
  const reservations =
    data?.listReviewsByUserId?.map((reservation) => reservation!) || [];

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
      <Header title="Mis Reseñas" path="/"></Header>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <Background>
          <div className="flex flex-col gap-3 mt-5 justify-center">
            <div className="flex flex-col gap-3">
              {loading ? (
                <Loading />
              ) : reservations.length > 0 ? (
                reservations.map((reservation, index) => {
                  return <div key={index}>{reservation.review}</div>;
                })
              ) : (
                <NoDataCard>No tiene Reseñas por el momento</NoDataCard>
              )}
            </div>
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default MyReviews;
