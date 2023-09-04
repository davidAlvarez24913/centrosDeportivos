import { IonSpinner } from "@ionic/react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex gap-2 bg-transparent  h-full justify-center items-center">
      <h2 className="text-primary text-xl">Cargando</h2>
      <IonSpinner name="crescent" className="text-primary text-xs" />
    </div>
  );
};
export default Loading;
