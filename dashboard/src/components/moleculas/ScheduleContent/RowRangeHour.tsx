import {
  Disponibility,
  RangeHour,
  Service,
  UpdateServiceInput,
  Weekday,
} from "schema";
import Modal from "../Modal";
import { useState } from "react";
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
  const user = useUser().user;
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

  return (
    <div className="flex justify-between">
      <p className="font-light">{`${rangeHour.startHour}-${rangeHour.endHour}`}</p>
      <p className="font-light">$ {rangeHour.price}</p>
      <p
        className="font-normal text-green-600 cursor-pointer"
        onClick={() => {
          // mutation to edit range hour
          setModalEditSchedule(true);
        }}
      >
        Editar
      </p>
      <p className="font-normal text-red-700 cursor-pointer" onClick={onDelete}>
        Eliminar
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
  );
};

export default RowRangeHour;
