import React from "react";

type PropsTagHour = {
  rangeHour: string;
  available: boolean;
};
const TagHour = ({ rangeHour, available }: PropsTagHour) => {
  const styles = available
    ? " w-14 text-center bg-primary text-background"
    : " w-14 text-center bg-background text-customText";
  return (
    <div
      className={
        "flex flex-col items-center w-min h-7 p-2 text-[8px] gap-1 rounded-2xl border-2 border-primary" +
        styles
      }
    >
      <h4 className={styles}>{rangeHour}</h4>
    </div>
  );
};

export default TagHour;
