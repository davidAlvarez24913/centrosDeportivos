import { useState } from "react";
import { CustomButton } from "../../atomos";
import BodyDisponibility from "../../organismos/BodyDisponibility";
import { disponibility } from "../../../data";
import Modal from "../Modal/Modal";
import ModalConfirmBooking from "../ModalConfirmBooking";
type NewBookProps = {
  onClose: () => void;
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

const ModalNewBook = ({ onClose }: NewBookProps) => {
  const [price, setPrice] = useState(0.0);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [days, setDays] = useState(daysDisponibility());
  const [hours, setHours] = useState<
    { rangeHour: string; available: boolean; price: number }[]
  >(
    disponibility.map((d) => {
      return { ...d, available: false };
    })
  );
  return (
    <div>
      <div className="flex flex-col gap-4 py-4">
        <h2 className="font-semibold text-lg ">Valor total: ${price}</h2>
        <h1 className="font-semibold text-lg ">Fecha</h1>
        <BodyDisponibility
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
