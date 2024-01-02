import {
  Disponibility,
  FireStoreService,
  UpdateDisponilityFirestore,
  findService,
} from "../../db/Firebase/Firestore/Service";

type RangeHour = {
  startHour: String;
  endHour: String;
  price: number;
};
enum Weekday {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}
const UpdateOnlyDisponility = async (root: any, { input }: any) => {
  let disp = {
    Monday: [] as RangeHour[],
    Tuesday: [] as RangeHour[],
    Friday: [] as RangeHour[],
    Wednesday: [] as RangeHour[],
    Saturday: [] as RangeHour[],
    Thursday: [] as RangeHour[],
    Sunday: [] as RangeHour[],
  };

  const { serviceId, startHour, endHour, price, ...rest } = input;

  const { disponibility } = (await findService(serviceId)) as FireStoreService;
  const generateDisponibility = (
    rest: any,
    disponibility: Disponibility | undefined
  ) => {
    if (disponibility === undefined) {
      // case disponibility dosen't exits
      Object.entries(rest).forEach(([key, value]) => {
        if (value) {
          disp = {
            ...disp,
            [key]: [{ startHour: startHour, endHour: endHour, price: price }],
          };
        }
      });
    } else {
      Object.entries(rest).forEach(([key, value]) => {
        if (value) {
          if (disponibility[key as Weekday] !== null) {
            // filter data with same hour
            const currentDay = disponibility[key as Weekday].filter(
              (element) =>
                element.endHour !== endHour && element.startHour !== startHour
            );
            disp = {
              ...disp,
              [key]: [...currentDay, { startHour, endHour, price }],
            };
          } else {
            disp = {
              ...disp,
              [key]: [{ startHour, endHour, price }],
            };
          }
        } else {
          disp = { ...disp, [key as Weekday]: disponibility[key as Weekday] };
        }
      });
    }
  };

  try {
    generateDisponibility(rest, disponibility);
    const update = await UpdateDisponilityFirestore(serviceId, disp);

    return { status: "Ok", message: "Horario se agrego exitosamente" };
  } catch (error) {
    return { status: "Failed", message: error };
  }
};

export default UpdateOnlyDisponility;
