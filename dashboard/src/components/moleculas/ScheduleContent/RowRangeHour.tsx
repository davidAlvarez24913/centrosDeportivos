import {
  Disponibility,
  RangeHour,
  Service,
  UpdateServiceInput,
  Weekday,
  useExitsReservationsLazyQuery,
} from "schema";
import { useIonToast } from "@ionic/react";

import Modal from "../Modal";
import { useEffect, useState } from "react";
import EditSchedule from "../EditSchedule";
import {
  changeLanguageDayES,
  cleanTypenameDisponibility,
} from "../../../utils";
import useUser from "../../../Hooks/useUser";

type PropsSchdeuleContent = {
  scheduelId: string;
  rangeHour: RangeHour;
  day: string;
  index: number;
  service: Omit<Service, "reservations" | "sportCenterId" | "__typename">;
  mutationSchedule: (input: UpdateServiceInput) => void;
};
const RowRangeHour = ({
  scheduelId,
  rangeHour,
  day,
  index,
  service,
  mutationSchedule,
}: PropsSchdeuleContent) => {
  const [modalEditSchedule, setModalEditSchedule] = useState(false);
  const [query, status] = useExitsReservationsLazyQuery();
  const user = useUser().user;
  const [present] = useIonToast();
  const [Error, setError] = useState("");

  const onDelete = () => {
    const dayEn = changeLanguageDayES(day);
    const disp = cleanTypenameDisponibility(
      service as Service
    ) as Disponibility;
    const auxDayDisponibility = disp[Weekday[dayEn as Weekday]]?.filter(
      (range, i) => i !== index
    );
    const input = {
      ...service,
      sportCenterId: user?.uid,
      disponibility: {
        ...disp,
        [dayEn]: auxDayDisponibility,
      },
    };
    mutationSchedule(input as UpdateServiceInput);
  };
  useEffect(() => {
    console.log(status.data);
  }, [status.loading]);
  return (
    <div>
      <p className="flex w-full">
        {Error !== "" && (
          <span className="text-yellow-500  text-center font-medium w-full border rounded border-yellow-500 p-1 shadow shadow-yellow-500">
            No es posbile ediar horario, existen reservas activas!
          </span>
        )}
      </p>
      <div className="flex justify-between">
        <p className="font-light">{`${rangeHour.startHour}-${rangeHour.endHour}`}</p>
        <p className="font-light">$ {rangeHour.price}</p>
        <p
          className="font-normal text-green-600 cursor-pointer"
          onClick={() => {
            query({
              variables: {
                rangeHour: rangeHour.startHour + " - " + rangeHour.endHour,
                sportCenterId: user?.uid as string,
                serviceId: service.serviceId,
              },
            });
            // mutation to edit range hour
            if (!status.loading) {
              if (!status.data?.exitsReservations.valueOf()) {
                setError(
                  "No es posbile ediar horario, existen reservas activas!"
                );
                present({
                  message:
                    "No es posbile ediar horario, existen reservas activas!",
                  duration: 1500,
                  color: "danger",
                  position: "top",
                });
              } else {
                setModalEditSchedule(true);
              }
            }
          }}
        >
          {status.loading ? "Cargando ..." : "Editar"}
          {/* Editar */}
        </p>

        <p
          className="font-normal text-red-700 cursor-pointer"
          onClick={onDelete}
        >
          {status.loading ? "Cargando ..." : "Eliminar"}

          {/* Eliminar */}
        </p>
        <Modal
          title={"Editar horario" + day}
          modalState={modalEditSchedule}
          closeModal={() => {
            setModalEditSchedule(false);
          }}
        >
          <EditSchedule
            day={day as string}
            index={index}
            service={service}
            onClose={() => {
              setModalEditSchedule(false);
            }}
            rangeHour={rangeHour}
            editSchedule={mutationSchedule}
          />
        </Modal>
      </div>
    </div>
  );
};

export default RowRangeHour;
