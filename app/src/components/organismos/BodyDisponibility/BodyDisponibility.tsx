import React, { memo } from "react";
import { DayCard, Loading, TagHour } from "src/components/atomos";

type PropsAvailableHours = {
  rangeHour: string;
  available: boolean;
  price: number;
};

type PropsBodyDisponibility = {
  setDay: React.Dispatch<React.SetStateAction<string>>;
  days: {
    date: string;
    available: boolean;
  }[];
  hours: PropsAvailableHours[];
  setDays: React.Dispatch<
    React.SetStateAction<
      {
        date: string;
        available: boolean;
      }[]
    >
  >;
  setHours: React.Dispatch<React.SetStateAction<PropsAvailableHours[]>>;
  selectedHour: string[];
  getHour: React.Dispatch<React.SetStateAction<string[]>>;
  loading: boolean;
};

const BodyDisponibility = ({
  days,
  hours,
  setHours,
  setDays,
  setDay,
  getHour,
  selectedHour,
  loading,
}: PropsBodyDisponibility) => {
  const onSelectDay = (date: string, index: number) => {
    setDay(date);
    const aux = days.map((day, i) => {
      if (i === index) return { date: day.date, available: true };
      else return { date: day.date, available: false };
    });
    setDays(aux);
  };

  const handleHours = (
    hour: PropsAvailableHours,
    hours: PropsAvailableHours[]
  ) => {
    if (hour.available === true) {
      const aux = hours.map((h) => {
        if (h.rangeHour === hour.rangeHour) {
          return { ...hour, available: false };
        } else {
          return h;
        }
      });
      setHours(aux);
    } else {
      const aux = hours.map((h) => {
        if (h.rangeHour === hour.rangeHour) {
          return { ...hour, available: true };
        } else {
          return h;
        }
      });
      setHours(aux);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-8 py-4 overflow-x-scroll">
        {days.map((day, index) => {
          return (
            <DayCard
              available={day.available}
              date={day.date}
              key={index}
              onClick={() => {
                getHour([]);
                onSelectDay(day.date, index);
              }}
            />
          );
        })}
      </div>
      <h1>Seleccionar Horario</h1>
      <div className=" flex gap-4 flex-wrap">
        {loading && <Loading />}
        {!loading && (hours === undefined || hours.length < 1) && (
          <p>Horarios no disponibles</p>
        )}

        {!loading &&
          hours &&
          hours?.map((hour, index) => {
            return (
              <TagHour
                available={hour.available!}
                rangeHour={hour.rangeHour}
                key={index}
                onClick={() => {
                  if (selectedHour.includes(hour.rangeHour)) {
                    const aux = selectedHour.filter(
                      (auxHour) => auxHour !== hour.rangeHour
                    );
                    getHour(aux);
                  } else {
                    getHour([...selectedHour, hour.rangeHour]);
                  }
                  handleHours(hour, hours);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default memo(BodyDisponibility);
