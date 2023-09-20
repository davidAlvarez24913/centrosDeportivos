import { memo } from "react";

const MenuBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background flex flex-col right-0 h-screen md:w-72 justify-between">
      {children}
    </div>
  );
};

export default memo(MenuBar);
