import { RangeHour, Service, UpdateServiceInput } from "schema";
import Modal from "../Modal";
import { useState } from "react";
import EditSchedule from "../EditSchedule";

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
      <p
        className="font-normal text-red-700 cursor-pointer"
        onClick={() => {
          // mutation do delete range hour
          console.log(scheduelId);
        }}
      >
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
          // loading={true}
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
