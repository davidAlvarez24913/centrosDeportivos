import React from "react";

type MainCardProps = {
  children?: React.ReactNode;
};
const MainCard = ({ children }: MainCardProps) => {
  return (
    <div className={`w-full border border-primary rounded-2xl `}>
      {children}
    </div>
  );
};

export default MainCard;
