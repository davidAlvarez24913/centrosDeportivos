import React from "react";
import { IonButton } from "@ionic/react";

type ProsCustomButton = {
  title: string;
  onClick?: React.MouseEventHandler<HTMLIonButtonElement> | undefined;
  color: "sucessfull" | "cancel";
};
function CustomButton({ title, onClick, color }: ProsCustomButton) {
  let styleColor = "";
  if (color === "cancel") styleColor = "bg-[#E62314] text-customText";
  if (color === "sucessfull") styleColor = "bg-primary text-background";
  return (
    <IonButton
      onClick={onClick}
      fill="clear"
      type="button"
      className={`rounded-xl w-full ${styleColor}`}
    >
      {title}
    </IonButton>
  );
}

export default CustomButton;
