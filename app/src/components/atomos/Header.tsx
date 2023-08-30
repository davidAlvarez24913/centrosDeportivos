import React from "react";
import { IonButton, IonHeader, useIonRouter } from "@ionic/react";

const Header = ({ title, path }: { title: string; path: string }) => {
  const ionRouter = useIonRouter();
  const goBack = (path: string) => {
    ionRouter.push(path);
  };
  return (
    <IonHeader>
      <div className="flex items-center">
        <IonButton
          type="button"
          fill="clear"
          onClick={() => goBack(path)}
          className="text-customText font-extrabold"
        >
          <img src="assets/icon/back-arrow.svg" alt="goback arrow" />
        </IonButton>
        <h1 className="text-2xl">{title}</h1>
      </div>
    </IonHeader>
  );
};
export default Header;
