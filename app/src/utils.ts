export const daysDisponibility = () => {
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

export const getDayString = (date: string) => {
  const day = new Date(date).getDay();
  let auxDay = "";

  if (0 === day) auxDay = "Sunday";
  if (1 === day) auxDay = "Monday";
  if (2 === day) auxDay = "Tuesday";
  if (3 === day) auxDay = "Wednesday";
  if (4 === day) auxDay = "Thursday";
  if (5 === day) auxDay = "Friday";
  if (6 === day) auxDay = "Saturday";
  return auxDay;
};

export const covertDateToStringEs = (day: string) => {
  const aux = new Date(day);
  const date = new Date(
    Date.UTC(
      aux.getFullYear(),
      aux.getUTCMonth(),
      aux.getUTCDate(),
      aux.getHours(),
      aux.getMinutes(),
      aux.getSeconds()
    )
  );
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("es-ES", options);
};
