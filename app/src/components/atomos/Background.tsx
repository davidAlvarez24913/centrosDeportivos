import React from "react";

type BackgroundProps = {
  background?: string;
  children?: React.ReactNode;
};
const Background = ({ background, children }: BackgroundProps) => {
  if (!background) background = "bg-background";
  return (
    <div className={`${background} w-full h-full overflow-auto relative`}>
      <>{children}</>
    </div>
  );
};

export default Background;
