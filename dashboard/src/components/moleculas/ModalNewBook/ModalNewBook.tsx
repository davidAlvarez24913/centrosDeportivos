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
  const [getReservations, status] = useGetReservationsByDateLazyQuery();

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
    getReservations({
      variables: { date: new Date(day).toDateString() },
    });

    if (!status.loading) {
      const reservationsRangeHour: string[] = [];
      status.data?.getReservationsByDate?.map((reservation) => {
        if (reservation?.state) {
          reservation.rangeHour?.map((h) => {
            reservationsRangeHour.push(h as string);
            return null;
          });
        }
        return null;
      });

      const availableHours = auxHours?.map((hour) => {
        return {
          rangeHour: hour.startHour + " - " + hour.endHour,
          available: false,
          price: hour.price,
        };
      });

      const availableHoursFiltered = availableHours?.filter(
        (h) => !reservationsRangeHour.includes(h.rangeHour)
      );
      setHours(availableHoursFiltered);
    }
  }, [
    disponibility,
    day,
    loadDisponibility,
    getReservations,
    status.loading,
    status.data,
  ]);

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
