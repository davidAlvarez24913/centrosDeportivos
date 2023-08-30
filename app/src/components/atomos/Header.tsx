import React from "react";
import { IonButton, IonHeader, useIonRouter } from "@ionic/react";

const Header = ({ title, path }: { title: string; path: string }) => {
  const ionRouter = useIonRouter();
  const goBack = (path: string) => {
    ionRouter.push(path);
  };
  return (
    <IonHeader>
      <div className="flex">
        <IonButton
          type="button"
          className="text-white"
          fill="clear"
          onClick={() => goBack(path)}
        >
          goback
        </IonButton>
        <h1>{title}</h1>
      </div>
    </IonHeader>
  );
};
export default Header;
