import { useEffect, useState } from "react";
import { CustomButton } from "../../atomos";
import BodyDisponibility from "../../organismos/BodyDisponibility";
import Modal from "../Modal/Modal";
import ModalConfirmBooking from "../ModalConfirmBooking";
import {
  Disponibility,
  RangeHour,
  Weekday,
  useGetReservationsByDateLazyQuery,
  useGetReservationsByDateQuery,
} from "schema";
import { daysDisponibility, getDayString } from "../../../utils";
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
  const [day, setDay] = useState<string>(new Date().toDateString());
  const [selectedHours, setSelectedHours] = useState<string[]>([]);

  //hook get reservations
  const status = useGetReservationsByDateQuery({
    variables: { date: new Date(day).toDateString(), serviceId: serviceId },
  });

  //reservaciones
  //dipsonibilidad
  //day
  // filter data

  const getDisponibility = (day: string) => {
    // map hours by date
    const dayString = getDayString(day);

    const { __typename, ...rest } = !loadDisponibility
      ? disponibility
      : ([] as Disponibility);

    const dispByDay = rest[Weekday[dayString as Weekday]];

    const result = dispByDay?.map((hour) => {
      //map to clean typename
      const { __typename, ...rest } = hour as RangeHour;
      return {
        rangeHour: rest.startHour + " - " + rest.endHour,
        available: false,
        price: rest.price,
      };
    });
    return result;
  };

  const reservationsRangeHour: string[] = [];

  useEffect(() => {
    if (!status.loading) {
      status.data?.getReservationsByDate?.forEach((reservation) => {
        if (reservation?.state) {
          reservation.rangeHour?.forEach((h) => {
            reservationsRangeHour.push(h as string);
          });
        }
      });
    }

    const availableHoursFiltered = getDisponibility(day as string)?.filter(
      (h) => !reservationsRangeHour.includes(h.rangeHour)
    );
    setHours(availableHoursFiltered);
  }, [day, status]);

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
          date={day}
          hours={selectedHours}
          onRefetch={() => {
            status.refetch();
          }}
          onClose={() => {
            setModalConfirm(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default ModalNewBook;
