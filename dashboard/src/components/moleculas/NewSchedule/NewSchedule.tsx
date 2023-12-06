import {
  RangeHour,
  Service,
  UpdateDisponibilityInput,
  UpdateServiceInput,
  Weekday,
} from "schema";
import { CustomButton, CustomInput } from "../../atomos";
import { buildRangeHour, changeLanguageDayES } from "../../../utils";
import useUser from "../../../Hooks/useUser";

type PropsNewSchedule = {
  onClose: () => void;
  rangeHour: RangeHour[];
  day: string;
  loading: boolean;
  service: Omit<Service, "reservations" | "sportCenterId" | "__typename">;
  addSchedule: (input: UpdateServiceInput) => void;
};
const NewSchedule = ({
  rangeHour,
  onClose,
  service,
  addSchedule,
  day,
  loading,
}: PropsNewSchedule) => {
  const { user } = useUser();
  let rangeHourAux: RangeHour;

  return (
    <div>
      <div className="flex justify-between gap-5">
        <CustomInput
          color="blue"
          list="hours-list-start"
          label="Hora inicio"
          placeholder="Seleccionar horario"
          required
          onChange={(e) => {
            rangeHourAux = { startHour: e.target.value, endHour: "", price: 0 };
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
          placeholder="Seleccionar horario"
          required
          onChange={(e) => {
            rangeHourAux = { ...rangeHourAux, endHour: e.target.value };
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
            rangeHourAux = { ...rangeHourAux, price };
          }}
        />
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
          disable={loading}
          type="button"
          onClick={() => {
            let result = {};

            if (service.disponibility === undefined) {
              const dayEn = changeLanguageDayES(day);

              Object.entries(Weekday).map((d) => {
                if (dayEn === d[0]) {
                  result = { ...result, [dayEn]: [rangeHourAux] };
                } else {
                  result = { ...result, [d[0]]: null };
                }
              });
            } else {
              result = buildRangeHour(day, rangeHourAux, service);
            }
            addSchedule({
              ...service,
              sportCenterId: user?.uid!,
              image: service.image,
              disponibility: result as UpdateDisponibilityInput,
            });
            !loading && onClose();
          }}
        />
      </div>
    </div>
  );
};

export default NewSchedule;
