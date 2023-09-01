import React from "react";

type PropsTagHour = {
  rangeHour: string;
  available: boolean;
};
const TagHour = ({ rangeHour, available }: PropsTagHour) => {
  const styles = available
    ? " bg-primary text-background"
    : " bg-background text-customText";
  return (
    <div
      className={
        "flex flex-col items-center w-18 h-8 p-2 text-xs gap-1 rounded-2xl border-2 border-primary" +
        styles
      }
    >
      <h4 className={styles}>{rangeHour}</h4>
    </div>
  );
};

export default TagHour;
