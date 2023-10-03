import { useEffect, useState } from "react";
import { CustomButton } from "../../atomos";
import BodyDisponibility from "../../organismos/BodyDisponibility";
import Modal from "../Modal/Modal";
import ModalConfirmBooking from "../ModalConfirmBooking";
import {
  Disponibility,
  RangeHour,
  Weekday,
  useGetDisponibilityQuery,
} from "schema";
import { getDayString } from "../../../utils";
type NewBookProps = {
  onClose: () => void;
  serviceId: string;
};

const daysDisponibility = () => {
  let dateAux = new Date();
  let arrayDay = [{ date: dateAux.toUTCString(), available: true }];
  for (let i = 1; i < 7; i++) {
    const element = new Date(dateAux.setDate(dateAux.getDate() + i));
    arrayDay.push({ date: element.toUTCString(), available: false });
    dateAux = new Date();
  }

  return arrayDay;
};
type PropsAvailableHours = {
  rangeHour: string;
  available: boolean;
  price: number;
};

const ModalNewBook = ({ onClose, serviceId }: NewBookProps) => {
  const [price, setPrice] = useState(0.0);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [days, setDays] = useState(daysDisponibility());
  const [hours, setHours] = useState<PropsAvailableHours[]>();
  const [day, setDay] = useState<string>(new Date().toLocaleDateString());
  const { data, loading } = useGetDisponibilityQuery({
    variables: { serviceId: serviceId },
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  useEffect(() => {
    const getDisponibility = (day: string) => {
      const dayString = getDayString(day);
      const { __typename, ...rest } = !loading
        ? (data?.getDisponibility as Disponibility)
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
  }, [data?.getDisponibility, day, loading]);

  return (
    <div>
      <div className="flex flex-col gap-4 py-4">
        <h2 className="font-semibold text-lg ">Valor total: ${price}</h2>
        <h1 className="font-semibold text-lg ">Fecha</h1>
        <BodyDisponibility
          setDay={setDay}
          serviceId={serviceId}
          days={days}
          hours={hours}
          setDays={setDays}
          setHours={setHours}
          setPrice={setPrice}
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
        title={"name sportcenter"}
        modalState={modalConfirm}
        closeModal={() => {
          setModalConfirm(false);
        }}
      >
        <ModalConfirmBooking
          price={20.5}
          onCreateRervation={() => {}}
          hours={["11:00 - 12:00", "11:00 - 12:00"]}
          onClose={() => {
            setModalConfirm(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default ModalNewBook;
