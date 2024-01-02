import {
  FireStoreReservation,
  listReservations,
} from "../../db/Firebase/Firestore/Reservation";
import {
  FireStoreService,
  findService,
} from "../../db/Firebase/Firestore/Service";
import { Reservation } from "../../db/TypeOrm/Entities";
import { getWeekday, mergeReservations } from "../utils";

enum Weekday {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

export const disponibilityResolvers = {
  Query: {
    getDisponibility: async (root: any, { date, serviceId }: any) => {
      try {
        const dayString = getWeekday(date) as Weekday;

        const reservationsSQL = await Reservation.find({
          where: { date: date, service: { serviceId: serviceId } },
          relations: { user: true, service: true },
        });
        const reservationsNoSQL = await listReservations();
        const mergedReservations = mergeReservations(
          reservationsSQL,
          reservationsNoSQL as FireStoreReservation[]
        );
        const bookings = mergedReservations
          .flatMap((reservation) => reservation.rangeHour)
          .filter((_) => _ !== undefined);

        const { disponibility } = (await findService(
          serviceId
        )) as FireStoreService;

        if (disponibility) {
          const disponibilityByDay = disponibility[dayString].map((element) => {
            return {
              rangeHour: element.startHour + " - " + element.endHour,
              price: element.price,
            };
          });
          const result = disponibilityByDay.filter(
            (hour) => !bookings.includes(hour.rangeHour)
          );
          return result;
        }
      } catch (error) {
        console.log(error);
      }

      //  end query
    },
  },
};
