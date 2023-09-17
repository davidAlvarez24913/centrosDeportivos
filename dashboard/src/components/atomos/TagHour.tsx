import React from "react";

type PropsTagHour = {
  rangeHour: string;
  available: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
const TagHour = ({ rangeHour, available, onClick }: PropsTagHour) => {
  const styles = available
    ? " w-32 text-center bg-primary text-background"
    : " w-32 text-center bg-background text-customText";
  return (
    <div
      className={
        "flex flex-row flex-wrap items-center p-2 text-md rounded-xl  border-background" +
        styles
      }
      onClick={onClick}
    >
      <h4 className={styles}>{rangeHour}</h4>
    </div>
  );
};

export default TagHour;
