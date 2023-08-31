import React from "react";

type PropsDaycard = {
  date: string;
  available: boolean;
};
const DayCard = ({ date, available }: PropsDaycard) => {
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
    ? "bg-primary text-background"
    : "bg-background text-customText";
  return (
    <div
      className={
        "flex flex-col items-center w-18 h-18 p-2 text-xs gap-1 rounded-2xl border-2 border-primary " +
        styles
      }
    >
      <h4 className={styles + " w-14 text-center"}>
        {weekday[auxdate.getDay()]}
      </h4>
      <h4 className={styles}>{auxdate.getDate()}</h4>
      <h4 className={styles}>{months[auxdate.getMonth()]}</h4>
    </div>
  );
};

export default DayCard;
