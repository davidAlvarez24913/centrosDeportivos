import React from "react";
import { IonHeader } from "@ionic/react";

export const Header = (title: string) => {
  return (
    <IonHeader className="text-white">
      <div>
        <div></div>
        <div>{title}</div>
      </div>
    </IonHeader>
  );
};
