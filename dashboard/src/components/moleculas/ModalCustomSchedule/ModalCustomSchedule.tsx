import { RangeHour, useUpdateOnlyDisponibilityMutation } from "schema";
import { CustomButton, CustomInput } from "../../atomos";
import { useState } from "react";
import { toast } from "react-toastify";

type CustomScheduleProps = {
  onClose: () => void;
  serviceId: string;
  onRefetch: () => void;
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
const ModalCustomSchedule = ({
  onClose,
  serviceId,
  onRefetch,
}: CustomScheduleProps) => {
  const [updateOnlyDisponibilityMutation] =
    useUpdateOnlyDisponibilityMutation();
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
    updateOnlyDisponibilityMutation({
      variables: {
        input: {
          serviceId: serviceId,
          ...rangeHourAux,
          ...selectedDays,
        },
      },
      onCompleted: (data) => {
        toast.success(data.updateOnlyDisponibility?.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        onClose();
      },
      onError: (error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
    });
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <p>En este apartado el horario se puede personalizar</p>
      <div className="">
        <div className="flex justify-between gap-5">
          <CustomInput
            color="blue"
            list="hours-list-start"
            label="Hora inicio"
            required
            onChange={(e) => {
              setRangeHourAux({ ...rangeHourAux, startHour: e.target.value });
            }}
          />
          <datalist id="hours-list-start">
            <option value="8:00"></option>
            <option value="9:00"></option>
            <option value="10:00"></option>
            <option value="11:00"></option>
            <option value="12:00"></option>
            <option value="13:00"></option>
            <option value="14:00"></option>
            <option value="15:00"></option>
            <option value="16:00"></option>
            <option value="17:00"></option>
            <option value="18:00"></option>
            <option value="19:00"></option>
            <option value="20:00"></option>
            <option value="21:00"></option>
            <option value="22:00"></option>
            <option value="23:00"></option>
          </datalist>
          <CustomInput
            color="blue"
            list="hours-list-start"
            label="Hora fin"
            required
            onChange={(e) => {
              setRangeHourAux({ ...rangeHourAux, endHour: e.target.value });
            }}
          />
          <datalist id="hours-list-start">
            <option value="8:00"></option>
            <option value="9:00"></option>
            <option value="10:00"></option>
            <option value="11:00"></option>
            <option value="12:00"></option>
            <option value="13:00"></option>
            <option value="14:00"></option>
            <option value="15:00"></option>
            <option value="16:00"></option>
            <option value="17:00"></option>
            <option value="18:00"></option>
            <option value="19:00"></option>
            <option value="20:00"></option>
            <option value="21:00"></option>
            <option value="22:00"></option>
            <option value="23:00"></option>
          </datalist>
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
