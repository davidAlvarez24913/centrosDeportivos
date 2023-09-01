import React from "react";
import { IonButton, IonHeader, useIonRouter } from "@ionic/react";
type FullServiceProps = {
  title: string;
  path?: string;
  dismiss?: () => void;
};
const Header = ({ title, path, dismiss }: FullServiceProps) => {
  const ionRouter = useIonRouter();
  return (
    <IonHeader>
      <div className="flex items-center bg-background border-b-primary py-1 ">
        <IonButton
          type="button"
          fill="clear"
          onClick={() => {
            path && ionRouter.push(path);
            dismiss && dismiss();
          }}
          className="text-customText font-extrabold"
        >
          <img src="assets/icon/back-arrow.svg" alt="goback arrow" width={24} />
        </IonButton>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </IonHeader>
  );
};
export default Header;
