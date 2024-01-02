import React from "react";
export type InformationSectionProps = {
  schedule: string;
  ubication: string;
  phone: string;
};
const InformationSection = ({
  schedule,
  ubication,
  phone,
}: InformationSectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2 ">
        <img
          src="assets/icon/schedule.svg"
          alt="sportIcon"
          className="w-6 rounded-r-2xl"
        />
        <p className="font-light text-base leading-4 ">{schedule}</p>
      </div>
      <div className="flex flex-row items-center gap-2 ">
        <img
          src="assets/icon/round-place.svg"
          alt="sportIcon"
          className="w-6 rounded-r-2xl"
        />
        <p className="font-light text-base leading-4 ">{ubication}</p>
      </div>
      <div className="flex flex-row items-center gap-2 ">
        <img
          src="assets/icon/phone.svg"
          alt="sportIcon"
          className="w-6 rounded-r-2xl"
        />
        <p className="font-light text-base leading-4 ">{phone}</p>
      </div>
    </div>
  );
};

export default InformationSection;
