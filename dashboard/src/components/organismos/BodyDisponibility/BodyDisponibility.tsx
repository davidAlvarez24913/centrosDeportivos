import { useEffect } from "react";
import DayCard from "../../moleculas/DayCard";
import { TagHour } from "../../atomos";

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
  hours: PropsAvailableHours[] | undefined;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setDays: React.Dispatch<
    React.SetStateAction<
      {
        date: string;
        available: boolean;
      }[]
    >
  >;
  setHours: React.Dispatch<
    React.SetStateAction<PropsAvailableHours[] | undefined>
  >;
  selectedHour: string[];
  getHour: React.Dispatch<React.SetStateAction<string[]>>;
};

const BodyDisponibility = ({
  days,
  hours,
  setPrice,
  setHours,
  setDays,
  setDay,
  getHour,
  selectedHour,
}: PropsBodyDisponibility) => {
  useEffect(() => {
    const prices = hours
      ? hours!.filter((hour) => hour.available === true).map((_) => _.price)
      : 0;
    setPrice(prices !== 0 ? prices.reduce((a, b) => a + b, 0) : 0);
  }, [hours, setPrice]);

  const onSelectDay = (date: string, index: number) => {
    setDay(date);
    setDays(
      days.map((day, i) => {
        if (i === index) return { date: day.date, available: true };
        else return { date: day.date, available: false };
      })
    );
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
      <div className="flex gap-4 py-4 overflow-scroll">
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
      <h2 className="font-semibold">Seleccionar Horario</h2>
      <div className=" flex gap-4 flex-wrap">
        {hours === undefined && <p>Reservas no disponibles</p>}
        {hours &&
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

export default BodyDisponibility;
