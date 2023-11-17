import {
  UnreservedHours,
  createRecordDisponibility,
  listDaysWithUnreservedHours,
} from "./db/Firebase/Firestore/Disponibility";
import {
  FireStoreService,
  listServices,
} from "./db/Firebase/Firestore/Service";

const CURRENT_DAY = new Date();
enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const createRecords = async (date: string) => {
  let currentDay = new Date(date);
  // console.log("fecha parametro:", date, "fecha currenday: ", currentDay);
  let arrayDay = [
    {
      date: currentDay.toDateString(),
      day: currentDay.toLocaleString("en-us", { weekday: "long" }),
    },
  ];
  for (let i = 1; i < 7; i++) {
    const element = new Date(currentDay.setDate(currentDay.getDate() + i));

    arrayDay.push({
      date: element.toDateString(),
      day: element.toLocaleString("en-us", { weekday: "long" }),
    });
    currentDay = new Date(date);
  }
  const servicesNoSQL = (await listServices()) as FireStoreService[];
  const hoursUnreserved: {
    unreservedHours: { startHour: String; endHour: String; price: number }[];
    date: string;
    serviceId: string;
  }[] = [];
  servicesNoSQL.forEach((item) => {
    const { serviceId, disponibility } = item;
    if (disponibility) {
      Object.entries(disponibility)
        .filter((item) => item[1].length > 0)
        .forEach((item) => {
          arrayDay.forEach((item2) => {
            if (item[0] === item2.day) {
              hoursUnreserved.push({
                unreservedHours: [...item[1]],
                date: item2.date,
                serviceId: String(serviceId),
              });
            }
          });
        });
    }
  });
  console.log(hoursUnreserved.map((item) => item.date));
  return hoursUnreserved;
};
const GenerateHoursDisponibility = async () => {
  let currentDay = new Date(CURRENT_DAY);

  // the paramater has date plus seven days
  const newDateAux = currentDay.setDate(currentDay.getDate() + 7);
  const dateAfterSevenDays = new Date(newDateAux);
  // console.log(currentDay, "why day +1", dateAfterSevenDays);
  const hoursUnreserved = await createRecords(
    dateAfterSevenDays.toDateString()
  );

  const auxdata = await listDaysWithUnreservedHours(
    dateAfterSevenDays.toDateString()
  );

  if (auxdata.length === 0) {
    try {
      for (let i = 0; i < hoursUnreserved.length; i++) {
        console.log(hoursUnreserved[i].date);
        await createRecordDisponibility(hoursUnreserved[i]);
      }
    } catch (error) {
      console.log(error);
    }
    console.log("end block if: inserted data");
  } else {
    console.log("not necessary insert data :)");
  }
};

export default GenerateHoursDisponibility;
