import React from "react";
import { MainCard } from "src/components/atomos";
import FullService from "./FullServiceModal";
import { InformationSectionProps } from "src/components/atomos/InformationSection";
type ServiceCardProps = {
  serviceId: string;
  name: string;
  description: string;
  image: string;
  sportCenter: string;
  sport: string;
  showSportCenter?: boolean;
  information: InformationSectionProps;
};
const ServiceCard = (service: ServiceCardProps) => {
  const {
    name,
    description,
    image,
    serviceId,
    sportCenter,
    showSportCenter = false,
  } = service;
  return (
    <MainCard>
      <div
        className="flex flex-row justify-between cursor-pointer"
        id={`open-service-${serviceId}-modal`}
      >
        <div className="flex flex-col gap-2 px-4 py-2">
          <h2 className="text-xl font-bold">{name}</h2>
          {showSportCenter && (
            <h2 className="text-lg font-semibold leading-3 mb-1 text-primary">
              {sportCenter}
            </h2>
          )}
          <p className="font-light text-xs leading-4 max-h-12 overflow-hidden">
            {description}
          </p>
        </div>
        <img
          src={image !== "" ? image : "/assets/default-image.jpg"}
          alt="sportIcon"
          className="max-w-[140px] min-w-[140px] min-h-32 object-cover rounded-r-2xl"
        />
      </div>
      <FullService {...service} />
    </MainCard>
  );
};

export default ServiceCard;
