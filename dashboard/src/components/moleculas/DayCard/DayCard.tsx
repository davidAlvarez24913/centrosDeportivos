import React from "react";

type PropsDaycard = {
  date: string;
  available: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
const DayCard = ({ date, available, onClick }: PropsDaycard) => {
  const weekday = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "Ene.",
    "Feb.",
    "Mar.",
    "Abr.",
    "May.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dic.",
  ];
  const auxdate = new Date(date);
  const styles = available
    ? "bg-background text-customText"
    : "bg-customWhite text-background";
  return (
    <div
      className={
        "flex flex-col items-center w-32 h-32 p-2 text-lg gap-1 font-semibold rounded-xl border-2 border-background " +
        styles
      }
      onClick={onClick}
    >
      <h4 className={styles + " w-32 text-center"}>
        {weekday[auxdate.getDay()]}
      </h4>
      <h4 className={styles}>{auxdate.getDate()}</h4>
      <h4 className={styles}>{months[auxdate.getMonth()]}</h4>
    </div>
  );
};

export default DayCard;
