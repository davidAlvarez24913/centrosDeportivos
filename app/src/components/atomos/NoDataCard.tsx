import React from "react";

type NoDataCardProps = {
  children?: React.ReactNode;
};
const NoDataCard = ({ children }: NoDataCardProps) => {
  return (
    <div
      className={`w-full border text-customText border-primary rounded-2xl p-4 text-center font-bold text-xl mt-5`}
    >
      {children}
    </div>
  );
};

export default NoDataCard;
