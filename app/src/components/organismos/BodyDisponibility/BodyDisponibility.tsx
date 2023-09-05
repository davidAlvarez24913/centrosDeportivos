import React, { useEffect, useState } from "react";
import { DayCard, TagHour } from "src/components/atomos";
import { disponibility, exampleRervations } from "src/data";

// type PropsBodyDisponibility = {
//   date: Date;
// };
const daysDisponibility = () => {
  let dateAux = new Date();
  // eslint-disable-next-line prefer-const
  let arrayDay = [{ date: dateAux.toUTCString(), available: true }];
  for (let i = 1; i < 7; i++) {
    const element = new Date(dateAux.setDate(dateAux.getDate() + i));
    arrayDay.push({ date: element.toUTCString(), available: false });
    dateAux = new Date();
  }

  return arrayDay;
};
const BodyDisponibility = () => {
  const [days, setDays] = useState(daysDisponibility());
  const [hours, setHours] =
    useState<{ rangeHour: string; available?: boolean; price: number }[]>(
      disponibility
    );
  const [hourSelected, setHourSelected] = useState<string[]>([]);

  useEffect(() => {
    setHours(
      disponibility.filter(
        ({ rangeHour }) => !exampleRervations.includes(rangeHour)
      )
    );
  }, [days, setHourSelected]);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 overflow-scroll">
        {days.map((day, index) => {
          return (
            <DayCard
              available={day.available}
              date={day.date}
              key={index}
              onClick={() => {
                // TODO query disponibility
                setDays(
                  days.map((day, i) => {
                    if (i === index) return { date: day.date, available: true };
                    else return { date: day.date, available: false };
                  })
                );
              }}
            />
          );
        })}
      </div>
      <h1>Seleccionar Horario</h1>
      <div className=" flex gap-4 flex-wrap">
        {hours.map((hour, index) => {
          return (
            <TagHour
              available={hour.available!}
              rangeHour={hour.rangeHour}
              key={index}
              onClick={() => {
                if (hourSelected.includes(hour.rangeHour)) {
                  setHourSelected(
                    hourSelected.filter((_) => _ !== hour.rangeHour)
                  );
                  setHours([
                    ...hours.filter((_) => _.rangeHour !== hour.rangeHour),
                    { ...hour, available: false },
                  ]);
                } else {
                  setHourSelected([...hourSelected, hour.rangeHour]);
                  const auxx = hours.filter(
                    (_) => _.rangeHour !== hour.rangeHour
                  );

                  setHours([...auxx, { ...hour, available: true }]);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BodyDisponibility;
