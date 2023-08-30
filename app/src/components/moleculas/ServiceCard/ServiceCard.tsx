import React from "react";
import { MainCard } from "src/components/atomos";

type ServiceCardProps = {
  title: string;
  description: string;
  imagePath: string;
};
const ServiceCard = ({ title, description, imagePath }: ServiceCardProps) => {
  return (
    <MainCard>
      <div className="flex flex-row justify-between cursor-pointer">
        <div className="flex flex-col gap-2 px-4 py-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="font-light text-xs leading-4">{description}</p>
        </div>
        <img
          src={imagePath}
          alt="sportIcon"
          className="max-w-[180px] min-w-[180px] max-h-32 object-contain rounded-r-2xl"
        />
      </div>
    </MainCard>
  );
};

export default ServiceCard;
