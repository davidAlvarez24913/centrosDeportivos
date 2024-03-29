import { RangeHour, Service, Weekday } from "schema";

export const changeLanguageDay = (day: string) => {
  let dia = "";

  if ("Sunday" === day) dia = "Domingo";
  if ("Monday" === day) dia = "Lunes";
  if ("Tuesday" === day) dia = "Martes";
  if ("Wednesday" === day) dia = "Miercoles";
  if ("Thursday" === day) dia = "Jueves";
  if ("Friday" === day) dia = "Viernes";
  if ("Saturday" === day) dia = "Sabado";
  return dia;
};
export const changeLanguageDayES = (day: string) => {
  let dia = "";

  if ("Domingo" === day) dia = "Sunday";
  if ("Lunes" === day) dia = "Monday";
  if ("Martes" === day) dia = "Tuesday";
  if ("Miercoles" === day) dia = "Wednesday";
  if ("Jueves" === day) dia = "Thursday";
  if ("Viernes" === day) dia = "Friday";
  if ("Sabado" === day) dia = "Saturday";
  return dia;
};
export const getStringUrl = (fieldImage: string) => {
  return fieldImage.split("#")[1];
};

export const buildRangeHour = (
  day: string,
  rangeHourAux: RangeHour,
  service: Omit<
    Service,
    "ranking" | "reservations" | "sportCenterId" | "__typename"
  >
) => {
  const dayEn = changeLanguageDayES(day);
  let daysAux = {};
  if (service.disponibility !== null) {
    const { __typename, ...days } = service.disponibility!;
    // clean days with rangeHour that has __typename
    Object.entries(days).map((d) => {
      if (d[1] == null) {
        daysAux = { ...daysAux, [d[0] as Weekday]: null };
      } else {
        const cl = d[1].map((el) => {
          const { __typename, ...rest } = el!;
          return rest;
        });
        daysAux = { ...daysAux, [d[0] as Weekday]: cl };
      }
    });
    // schedule of  selected day
    const daySchedule = days[Weekday[dayEn as Weekday]];
    if (daySchedule !== null) {
      const cleanDay = daySchedule?.map((el) => {
        const { __typename, ...rest } = el!;
        return rest;
      });
      const result = {
        ...daysAux,
        [dayEn as Weekday]: [...cleanDay!, { ...rangeHourAux }],
      };
      return result;
    } else {
      const result = {
        ...daysAux,
        [dayEn as Weekday]: [{ ...rangeHourAux }],
      };

      return result;
    }
  } else {
    Object.entries(Weekday).map((d) => {
      if (dayEn === d[0]) {
        daysAux = { ...daysAux, [dayEn]: [rangeHourAux] };
      } else {
        daysAux = { ...daysAux, [d[0]]: null };
      }
    });
    console.log(daysAux);
    return daysAux;
  }
};
export const getImageNameBucket = (fieldImage: string) => {
  return fieldImage.split("#")[0];
};

export const cleanTypenameDisponibility = (service: Service) => {
  let daysAux = {};
  if (service.disponibility) {
    const { __typename, ...days } = service.disponibility!;

    Object.entries(days).map((day) => {
      if (day[1] == null) {
        daysAux = { ...daysAux, [day[0] as Weekday]: null };
      } else {
        const cleanedArray = day[1].map((element) => {
          const { __typename, ...rest } = element!;
          return rest;
        });
        daysAux = { ...daysAux, [day[0] as Weekday]: cleanedArray };
      }
    });
    return daysAux;
  } else {
    daysAux = service.disponibility!;
    return daysAux;
  }
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
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return aux.toLocaleDateString("es-ES", options);
};

export const daysDisponibility = () => {
  let dateAux = new Date();
  let arrayDay = [{ date: dateAux.toUTCString(), available: true }];
  for (let i = 1; i < 7; i++) {
    const element = new Date(dateAux.setDate(dateAux.getDate() + i));
    arrayDay.push({ date: element.toUTCString(), available: false });
    dateAux = new Date();
  }

  return arrayDay;
};
