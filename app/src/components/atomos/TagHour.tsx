import React, { memo } from "react";

type PropsTagHour = {
  rangeHour: string;
  available: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
const TagHour = ({ rangeHour, available, onClick }: PropsTagHour) => {
  const styles = available
    ? " bg-primary text-background"
    : " bg-background text-customText";
  return (
    <div
      className={
        "flex flex-col w-34 h-9 p-2 text-sm gap-1 rounded-2xl border-2 border-primary cursor-pointer" +
        styles
      }
      onClick={onClick}
    >
      <h4 className={"w-34" + styles}>{rangeHour}</h4>
    </div>
  );
};

export default memo(TagHour);
