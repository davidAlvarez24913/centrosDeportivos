import { useState } from "react";
import { CustomButton } from "../../atomos";
import BodyDisponibility from "../BodyDisponibility";
import { disponibility } from "../../../data";
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
        <h1 className="font-semibold text-lg ">name service</h1>
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
      <CustomButton
        title="Reservar"
        color="blue"
        type="button"
        onClick={onClose}
      />
    </div>
  );
};

export default ModalNewBook;
