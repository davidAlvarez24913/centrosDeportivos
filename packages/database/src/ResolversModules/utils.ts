import { Reservation, Service, SportCenter, User } from "../db/Entities";
import { FireStoreReservation } from "../db/Firebase/Firestore/Reservation";
import { FireStoreService } from "../db/Firebase/Firestore/Service";
import { FireStoreSportCenter } from "../db/Firebase/Firestore/SportCenter";
import { FireStoreUser } from "../db/Firebase/Firestore/User";

export const mergeUsers = (sqlUser: User[], firestoreUser: FireStoreUser[]) => {
  return sqlUser.map((obj1) => {
    const obj2 = firestoreUser.find((obj2) => obj1.userId === obj2.userId);
    return { ...obj1, ...obj2 };
  });
};

export const mergeSportCenter = (
  sqlSportCenter: SportCenter[],
  firestoreSportCenter: FireStoreSportCenter[]
) => {
  return sqlSportCenter.map((obj1) => {
    const obj2 = firestoreSportCenter.find(
      (obj2) => obj1.sportCenterId === obj2.sportCenterId.toString()
    );
    return { ...obj1, ...obj2 };
  });
};

export const mergeServices = (
  sqlServices: Service[],
  firestoreService: FireStoreService[]
) => {
  return sqlServices.map((obj1) => {
    const obj2 = firestoreService.find(
      (obj2) => obj1.serviceId == obj2.serviceId
    );
    return { ...obj1, ...obj2 };
  });
};

export const mergeReservations = (
  sqlServices: Reservation[],
  firestoreService: FireStoreReservation[]
) => {
  return sqlServices.map((obj1) => {
    const obj2 = firestoreService.find(
      (obj2) => obj1.reservationId === Number(obj2.reservationId)
    );
    return {
      ...obj1,
      paymentPhoto: obj2?.paymentPhoto,
    };
  });
};

export const getWeekday = (date: string) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const numberDay = new Date(date).getDay();
  return days[numberDay];
};

export const generateSchedule = (startHour: string, endHour: string) => {
  const start = Number(startHour.split(":")[0]);
  const end = Number(endHour.split(":")[0]);
  var dayDisponibility = [];

  for (let index = start; index <= end - 1; index++) {
    const auxRangeHour =
      index.toString() + ":00-" + (index + 1).toString() + ":00";
    dayDisponibility.push(auxRangeHour);
  }
  return dayDisponibility;
};
type schedule = {
  startHour: String;
  endHour: String;
  weekday:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  price: number;
};
export const schedule = (data: schedule[]) => {
  let aux = {
    Sunday: [] as { startHour: String; endHour: String; price: number }[],
    Monday: [] as { startHour: String; endHour: String; price: number }[],
    Tuesday: [] as { startHour: String; endHour: String; price: number }[],
    Wednesday: [] as { startHour: String; endHour: String; price: number }[],
    Thursday: [] as { startHour: String; endHour: String; price: number }[],
    Friday: [] as { startHour: String; endHour: String; price: number }[],
    Saturday: [] as { startHour: String; endHour: String; price: number }[],
  };
  data.map((d) => {
    const { weekday, ...schedule } = d;
    if (weekday === "Monday") aux.Monday.push({ ...schedule });
    if (weekday === "Friday") aux.Friday.push({ ...schedule });
    if (weekday === "Saturday") aux.Saturday.push({ ...schedule });
    if (weekday === "Sunday") aux.Sunday.push({ ...schedule });
    if (weekday === "Thursday") aux.Thursday.push({ ...schedule });
    if (weekday === "Tuesday") aux.Tuesday.push({ ...schedule });
    if (weekday === "Wednesday") aux.Wednesday.push({ ...schedule });
  });
  return aux;
};
