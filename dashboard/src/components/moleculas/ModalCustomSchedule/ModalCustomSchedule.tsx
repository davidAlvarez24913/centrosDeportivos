import { RangeHour } from "schema";
import { CustomButton, CustomInput } from "../../atomos";
import { useState } from "react";

type CustomScheduleProps = {
  onClose: () => void;
};
type days = {
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thursday: boolean;
  Friday: boolean;
  Saturday: boolean;
  Sunday: boolean;
};
const ModalCustomSchedule = ({ onClose }: CustomScheduleProps) => {
  const [rangeHourAux, setRangeHourAux] = useState<RangeHour>({
    startHour: "",
    endHour: "",
    price: 0,
  });
  const [selectedDays, setSelectedDays] = useState<days>({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const verifyFields = (rangeHourAux: RangeHour, selectedDays: days) => {
    let flag1 =
      rangeHourAux.startHour !== "" &&
      rangeHourAux.endHour !== "" &&
      rangeHourAux.price !== 0;

    let flag2 = false;
    for (const [key, value] of Object.entries(selectedDays)) {
      if (value !== false) {
        flag2 = true;
        break;
      }
    }
    return flag1 && flag2;
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ ...rangeHourAux, ...selectedDays });
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <p>En este apartado el horario se puede personalizar</p>
      <div className="">
        <div className="flex justify-between gap-5">
          <CustomInput
            color="blue"
            type="time"
            label="Hora inicio"
            required
            onChange={(e) => {
              setRangeHourAux({ ...rangeHourAux, startHour: e.target.value });
            }}
          />
          <CustomInput
            color="blue"
            type="time"
            label="Hora fin"
            required
            onChange={(e) => {
              setRangeHourAux({ ...rangeHourAux, endHour: e.target.value });
            }}
          />
        </div>
        <div className="flex w-1/2 pr-2">
          <CustomInput
            color="blue"
            type="number"
            label="Precio"
            required
            min={0}
            onChange={(e) => {
              const price = Number(e.target.value);
              setRangeHourAux({ ...rangeHourAux, price: price });
            }}
          />
        </div>
        <h3 className="font-bold text-xl my-2">Dias a repetir</h3>
        <p className="font-semibold mb-2">Selecciona al menos un día</p>
        <div className="grid grid-cols-4 gap-5">
          <div className="flex flex-row gap-2">
            <label htmlFor="Lunes">Lunes</label>
            <input
              type="checkbox"
              name="Lunes"
              id="Lunes"
              className="w-5"
              onChange={(e) => {
                setSelectedDays({ ...selectedDays, Monday: e.target.checked });
              }}
            />
          </div>
          <div className="flex flex-row gap-2">
            <label htmlFor="Martes">Martes</label>
            <input
              type="checkbox"
              name="Martes"
              id="Martes"
              className="w-5"
              onChange={(e) => {
                setSelectedDays({ ...selectedDays, Tuesday: e.target.checked });
              }}
            />
          </div>
          <div className="flex flex-row gap-2">
            <label htmlFor="Miercoles">Miercoles</label>
            <input
              type="checkbox"
              name="Miercoles"
              id="Miercoles"
              className="w-5"
              onChange={(e) => {
                setSelectedDays({
                  ...selectedDays,
                  Wednesday: e.target.checked,
                });
              }}
            />
          </div>
          <div className="flex flex-row gap-2">
            <label htmlFor="Jueves">Jueves</label>
            <input
              type="checkbox"
              name="Jueves"
              id="Jueves"
              className="w-5"
              onChange={(e) => {
                setSelectedDays({
                  ...selectedDays,
                  Thursday: e.target.checked,
                });
              }}
            />
          </div>
          <div className="flex flex-row gap-2">
            <label htmlFor="Viernes">Viernes</label>
            <input
              type="checkbox"
              name="Viernes"
              id="Viernes"
              className="w-5"
              onChange={(e) => {
                setSelectedDays({ ...selectedDays, Friday: e.target.checked });
              }}
            />
          </div>
          <div className="flex flex-row gap-2">
            <label htmlFor="Sábado">Sábado</label>
            <input
              type="checkbox"
              name="Sábado"
              id="Sábado"
              className="w-5"
              onChange={(e) => {
                setSelectedDays({
                  ...selectedDays,
                  Saturday: e.target.checked,
                });
              }}
            />
          </div>
          <div className="flex flex-row gap-2">
            <label htmlFor="Domingo">Domingo</label>
            <input
              type="checkbox"
              name="Domingo"
              id="Domingo"
              className="w-5"
              onChange={(e) => {
                setSelectedDays({ ...selectedDays, Sunday: e.target.checked });
              }}
            />
          </div>
        </div>

        <div className="flex gap-5 pt-5">
          <CustomButton
            color="cancel"
            title="Cancelar"
            type="button"
            onClick={onClose}
          />
          <CustomButton
            color="sucessfull"
            title="Crear Horario"
            disable={!verifyFields(rangeHourAux, selectedDays)}
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default ModalCustomSchedule;
