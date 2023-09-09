import { IonButton, IonSpinner } from "@ionic/react";
import React from "react";

type ProsCustomButton = {
  title: string;
  onClick?: React.MouseEventHandler<HTMLIonButtonElement> | undefined;
  color: "sucessfull" | "cancel" | "outline";
  type: "button" | "submit" | "reset";
  id?: string;
  disable?: boolean;
  loading?: boolean;
};
function CustomButton({
  title,
  onClick,
  color,
  type,
  id,
  disable,
  loading,
}: ProsCustomButton) {
  let styleColor = "";
  if (color === "cancel") styleColor = "bg-[#E62314] text-customText";
  if (color === "sucessfull") styleColor = "bg-primary text-background";
  if (color === "outline")
    styleColor = "bg-transparent border-2 border-primary  text-primary ";
  return (
    <IonButton
      id={id}
      onClick={onClick}
      fill="clear"
      type={type}
      size="small"
      disabled={disable}
      className={`rounded-xl w-full text-xl font-medium h-10 ${styleColor}`}
    >
      {title}
      {loading && (
        <IonSpinner name="crescent" className="text-primary text-xs" />
      )}
    </IonButton>
  );
}

export default CustomButton;
