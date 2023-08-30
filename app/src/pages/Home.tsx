import React from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <h1>Title</h1>
      </IonHeader>
      <IonContent>
        <h1>Content</h1>
      </IonContent>
    </IonPage>
  );
};

export default Home;
