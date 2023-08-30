import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import { Header } from "src/components/atomos";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title="TasTas" path="/"></Header>
      <IonContent>
        <h1>Content</h1>
      </IonContent>
    </IonPage>
  );
};

export default Home;
