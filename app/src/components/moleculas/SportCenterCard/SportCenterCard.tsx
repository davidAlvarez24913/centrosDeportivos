import { useIonRouter } from "@ionic/react";
import React from "react";
import { MainCard } from "src/components/atomos";

type SportCenterProps = {
  sportCenterId: string;
  name: string;
  schedule: string;
  ubication: string;
  phone: string;
  image: string;
};
const SportCenterCard = ({
  name,
  schedule,
  ubication,
  image,
  phone,
  sportCenterId,
}: SportCenterProps) => {
  const ionRouter = useIonRouter();

  return (
    <MainCard>
      <div
        className="flex flex-row justify-between cursor-pointer"
        onClick={() => {
          ionRouter.push(`sportCenter/${sportCenterId}`);
        }}
      >
        <div className="flex flex-col gap-2 px-4 py-3">
          <h1 className="text-2xl font-bold">{name}</h1>
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
            <p className="font-light text-xs leading-4 ">{ubication}</p>
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <img
              src="assets/icon/phone.svg"
              alt="sportIcon"
              className="w-5 rounded-r-2xl"
            />
            <p className="font-light text-xs leading-4 ">{phone}</p>
          </div>
        </div>
        <img
          src={image}
          alt="sportIcon"
          className="w-[180px] rounded-r-2xl object-cover"
        />
      </div>
    </MainCard>
  );
};

export default SportCenterCard;
