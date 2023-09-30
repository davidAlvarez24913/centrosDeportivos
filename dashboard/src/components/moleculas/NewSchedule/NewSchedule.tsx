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
          type="time"
          label="Hora inicio"
          required
          onChange={(e) => {
            rangeHourAux = { startHour: e.target.value, endHour: "", price: 0 };
          }}
        />
        <CustomInput
          color="blue"
          type="time"
          label="Hora fin"
          required
          onChange={(e) => {
            rangeHourAux = { ...rangeHourAux, endHour: e.target.value };
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
