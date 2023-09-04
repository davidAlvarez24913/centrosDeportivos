import React from "react";
import { MainCard } from "src/components/atomos";
import FullService from "./FullServiceModal";
type ServiceCardProps = {
  serviceId: string;
  name: string;
  description: string;
  image: string;
  sportCenter: string;
  sport: string;
  showSportCenter?: boolean;
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
          <h2 className="text-2xl font-bold">{name}</h2>
          {showSportCenter && (
            <h2 className="text-xl font-semibold leading-3 mb-1">
              {sportCenter}
            </h2>
          )}
          <p className="font-light text-xs leading-4 max-h-12 overflow-hidden">
            {description}
          </p>
        </div>
        <img
          src={image}
          alt="sportIcon"
          className="max-w-[180px] min-w-[180px] max-h-32 object-cover rounded-r-2xl"
        />
      </div>
      <FullService {...service} />
    </MainCard>
  );
};

export default ServiceCard;
