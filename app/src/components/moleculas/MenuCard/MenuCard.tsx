import React from "react";
import { MainCard } from "src/components/atomos";

type MenuCardProps = {
  title: string;
  description?: string;
  iconPath: string;
  onClick: () => void;
};
const MenuCard = ({ title, description, iconPath, onClick }: MenuCardProps) => {
  return (
    <MainCard>
      <div
        className="flex flex-row justify-between cursor-pointer items-center p-4"
        onClick={() => onClick()}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          {description && (
            <p className="font-light text-xs leading-4 ">{description}</p>
          )}
        </div>
        <img src={iconPath} alt="sportIcon" className="w-14" />
      </div>
    </MainCard>
  );
};

export default MenuCard;
