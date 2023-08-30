import React from "react";
import { MainCard } from "src/components/atomos";

type SportCenterProps = {
  title: string;
  schedule: string;
  ubication: string;
  contact: string;
  imagePath: string;
};
const SportCenterCard = ({
  title,
  schedule,
  contact,
  ubication,
  imagePath,
}: SportCenterProps) => {
  return (
    <MainCard>
      <div className="flex flex-row justify-between cursor-pointer">
        <div className="flex flex-col gap-2 px-4 py-3">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex flex-row items-center gap-2 ">
            <img
              src="assets/icon/schedule.svg"
              alt="sportIcon"
              className="w-5 rounded-r-2xl"
            />
            <p className="font-light text-xs leading-4 ">{schedule}</p>
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <img
              src="assets/icon/round-place.svg"
              alt="sportIcon"
              className="w-5 rounded-r-2xl"
            />
            <p className="font-light text-xs leading-4 ">{contact}</p>
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <img
              src="assets/icon/phone.svg"
              alt="sportIcon"
              className="w-5 rounded-r-2xl"
            />
            <p className="font-light text-xs leading-4 ">{ubication}</p>
          </div>
        </div>
        <img
          src={imagePath}
          alt="sportIcon"
          className="max-w-[180px] min-w-[180px] max-h-32 rounded-r-2xl object-contain"
        />
      </div>
    </MainCard>
  );
};

export default SportCenterCard;
