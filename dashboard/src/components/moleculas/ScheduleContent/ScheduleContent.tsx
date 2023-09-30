import { RangeHour, Service, UpdateServiceInput } from "schema";
import { useState } from "react";
import Modal from "../Modal";
import NewSchedule from "../NewSchedule";
import RowRangeHour from "./RowRangeHour";

type PropsSchdeuleContent = {
  scheduelId: string;
  rangeHourList: RangeHour[];
  day: string;
  loading: boolean;
  service: Omit<
    Service,
    "ranking" | "reservations" | "sportCenterId" | "__typename"
  >;
  mutationSchedule?: (input: UpdateServiceInput) => void;
};
const ScheduleContent = ({
  scheduelId,
  rangeHourList,
  day,
  loading,
  service,
  mutationSchedule,
}: PropsSchdeuleContent) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNewSchedule, setModalNewSchedule] = useState(false);

  return (
    <div>
      <hr className="border-background  my-2" />
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className="w-11/12 text-lg font-semibold">{day}</p>
        <div className="px-5">
          <img src="/icons/arrow-down-bold.svg" alt="arrow" />
        </div>
      </div>
      <div className={`${!isOpen ? "hidden" : ""}`}>
        <button
          className="bg-background text-customText text-md py-1 px-4 rounded-xl font-semibold"
          onClick={() => {
            setModalNewSchedule(true);
          }}
        >
          Agregar Horario
        </button>
        <div className="flex gap-20">
          <p className="font-semibold">Horario</p>
          <p className="font-semibold">Precio</p>
        </div>
        {rangeHourList.length > 0 ? (
          rangeHourList.map((item, index) => {
            return (
              <RowRangeHour
                rangeHour={item}
                scheduelId={index.toString()}
                key={index}
              />
            );
          })
        ) : (
          <span>No exiten horas asignadas en este dia!</span>
        )}
      </div>
      <Modal
        title={"Horario"}
        modalState={modalNewSchedule}
        closeModal={() => {
          setModalNewSchedule(false);
        }}
      >
        <NewSchedule
          loading={loading}
          day={day}
          service={service}
          onClose={() => {
            setModalNewSchedule(false);
          }}
          rangeHour={[]}
          addSchedule={mutationSchedule!}
        />
      </Modal>
    </div>
  );
};

export default ScheduleContent;
