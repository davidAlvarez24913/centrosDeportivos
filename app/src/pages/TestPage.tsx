import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useAllUSersQuery } from "schema";
const TesPage = () => {
  const { data, loading, error } = useAllUSersQuery();
  console.log("data:", data?.allUsers);
  console.log(loading);
  console.log(error);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <div style={{ color: "white" }}>
            {data?.allUsers?.map((user, index) => {
              return (
                <div key={index}>
                  <p>{user?.email}</p>
                </div>
              );
            })}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default TesPage;
