import React, { useRef } from "react";

import { IonContent, IonModal, useIonRouter } from "@ionic/react";
import {
  Background,
  CustomButton,
  Header,
  InformationSection,
} from "src/components/atomos";
import { InformationSectionProps } from "src/components/atomos/InformationSection";
type FullServiceProps = {
  serviceId: string;
  name: string;
  description: string;
  image: string;
  sportCenter: string;
  sport: string;
  information: InformationSectionProps;
};
const FullService = ({
  name,
  description,
  image,
  sportCenter,
  serviceId,
  sport,
  information,
}: FullServiceProps) => {
  const ref = useRef<HTMLIonModalElement>(null);
  const ionRouter = useIonRouter();
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
            <InformationSection {...information} />
            <CustomButton
              title="Seleccionar horarios"
              color="sucessfull"
              onClick={() => {
                const info = JSON.stringify({
                  serviceId: serviceId,
                  sportCenter: sportCenter,
                  nameService: name,
                });
                ionRouter.push(`/disponibility/${info}`);
              }}
              type="button"
            />
          </div>
        </Background>
      </IonContent>
    </IonModal>
  );
};

export default FullService;
