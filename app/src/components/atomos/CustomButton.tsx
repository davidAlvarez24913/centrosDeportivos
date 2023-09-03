import { IonButton } from "@ionic/react";
import React from "react";

type ProsCustomButton = {
  title: string;
  onClick?: React.MouseEventHandler<HTMLIonButtonElement> | undefined;
  color: "sucessfull" | "cancel" | "outline";
  type: "button" | "submit" | "reset";
};
function CustomButton({ title, onClick, color, type }: ProsCustomButton) {
  let styleColor = "";
  if (color === "cancel") styleColor = "bg-[#E62314] text-customText";
  if (color === "sucessfull") styleColor = "bg-primary text-background";
  if (color === "outline")
    styleColor = "bg-transparent border-2 border-primary  text-primary ";
  return (
    <IonButton
      onClick={onClick}
      fill="clear"
      type={type}
      size="small"
      className={`rounded-xl w-full text-xl font-medium h-10 ${styleColor}`}
    >
      {title}
    </IonButton>
  );
}

export default CustomButton;
