import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useAllUSersQuery } from "schema";
import { Header } from "src/components/atomos";
const TesPage = () => {
  const { data, loading, error } = useAllUSersQuery();
  console.log("data:", data?.allUsers);
  console.log(loading);
  console.log(error);

  return (
    <IonPage>
      <Header title={"Iniciar Sesión"} path="/"></Header>
      <IonContent>
        <div>
          <div style={{ color: "white" }}>
            {data?.allUsers?.map((user, index) => {
              return (
                <div key={index} className="text-3xl text-red-600">
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
