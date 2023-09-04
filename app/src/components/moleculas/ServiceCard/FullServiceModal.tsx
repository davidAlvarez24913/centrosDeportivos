import React, { useRef } from "react";

import { IonContent, IonModal } from "@ionic/react";
import {
  Background,
  CustomButton,
  Header,
  InformationSection,
} from "src/components/atomos";
type FullServiceProps = {
  serviceId: string;
  name: string;
  description: string;
  image: string;
  sportCenter: string;
  sport: string;
};
const FullService = ({
  name,
  description,
  image,
  sportCenter,
  serviceId,
  sport,
}: FullServiceProps) => {
  const ref = useRef<HTMLIonModalElement>(null);
  return (
    <IonModal ref={ref} trigger={`open-service-${serviceId}-modal`}>
      <Header
        title={sportCenter}
        dismiss={() => {
          ref.current?.dismiss();
        }}
      ></Header>
      <IonContent>
        <Background>
          <div className="flex flex-col gap-3 mt-5">
            <h2 className="text-2xl font-bold ">{name}</h2>
            <img src={image} alt="service image" />
            <p className="text-sm font-normal">{description}</p>
            <div className="flex flex-row items-center gap-2 ">
              <img
                src="assets/icon/Futbol.svg"
                alt="sportIcon"
                className="w-6 rounded-r-2xl"
              />
              <p className="font-light text-base leading-4 ">{sport}</p>
            </div>
            <InformationSection
              phone={sport}
              ubication={sport}
              schedule={sport}
            />
            <CustomButton
              title="Seleccionar horarios"
              color="sucessfull"
              onClick={() => {}}
              type="button"
            />
          </div>
        </Background>
      </IonContent>
    </IonModal>
  );
};

export default FullService;
