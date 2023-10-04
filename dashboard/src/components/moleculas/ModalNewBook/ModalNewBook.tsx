import { useEffect, useState } from "react";
import { CustomButton } from "../../atomos";
import BodyDisponibility from "../../organismos/BodyDisponibility";
import Modal from "../Modal/Modal";
import ModalConfirmBooking from "../ModalConfirmBooking";
import {
  Disponibility,
  RangeHour,
  Weekday,
  useCreateReservationMutation,
} from "schema";
import {
  covertDateToStringEs,
  daysDisponibility,
  getDayString,
} from "../../../utils";
type NewBookProps = {
  onClose: () => void;
  serviceId: string;
  nameService: string;
  disponibility: Disponibility;
  loadDisponibility: boolean;
};

type PropsAvailableHours = {
  rangeHour: string;
  available: boolean;
  price: number;
};

const ModalNewBook = ({
  onClose,
  serviceId,
  nameService,
  disponibility,
  loadDisponibility,
}: NewBookProps) => {
  //hooks ui
  const [modalConfirm, setModalConfirm] = useState(false);
  const [days, setDays] = useState(daysDisponibility()); // days to show
  const [hours, setHours] = useState<PropsAvailableHours[]>();

  //hooks data
  const [price, setPrice] = useState(0.0);
  const [day, setDay] = useState<string>(new Date().toLocaleDateString());
  const [selectedHours, setSelectedHours] = useState<string[]>([]);

  useEffect(() => {
    const getDisponibility = (day: string) => {
      const dayString = getDayString(day);
      const { __typename, ...rest } = !loadDisponibility
        ? disponibility
        : ([] as Disponibility);
      return rest[Weekday[dayString as Weekday]];
    };
    const auxHours = getDisponibility(day as string)?.map((hour) => {
      const { __typename, ...rest } = hour as RangeHour;
      return rest;
    });
    // here check with reservations
    const availableHours = auxHours?.map((hour) => {
      return {
        rangeHour: hour.startHour + " - " + hour.endHour,
        available: false,
        price: hour.price,
      };
    });
    setHours(availableHours);
  }, [disponibility, day, loadDisponibility]);

  return (
    <div>
      <div className="flex flex-col gap-4 py-4">
        <h2 className="font-semibold text-lg ">Valor total: ${price}</h2>
        <h1 className="font-semibold text-lg ">Fecha</h1>
        <BodyDisponibility
          setDay={setDay}
          days={days}
          hours={hours}
          setDays={setDays}
          setHours={setHours}
          setPrice={setPrice}
          selectedHour={selectedHours}
          getHour={setSelectedHours}
        ></BodyDisponibility>
      </div>
      <div className="flex content-end mt-20">
        <CustomButton
          title="Reservar"
          color="blue"
          type="button"
          onClick={() => {
            setModalConfirm(true);
          }}
        />
      </div>
      <Modal
        title={nameService || ""}
        modalState={modalConfirm}
        closeModal={() => {
          setModalConfirm(false);
        }}
      >
        <ModalConfirmBooking
          price={price}
          serviceId={serviceId}
          date={covertDateToStringEs(day)}
          hours={selectedHours}
          onClose={() => {
            setModalConfirm(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default ModalNewBook;
