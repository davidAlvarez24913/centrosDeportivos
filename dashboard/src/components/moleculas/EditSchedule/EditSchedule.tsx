import {
  Disponibility,
  RangeHour,
  Service,
  UpdateDisponibilityInput,
  UpdateServiceInput,
  Weekday,
} from "schema";
import { CustomButton, CustomInput } from "../../atomos";
import {
  buildRangeHour,
  changeLanguageDay,
  changeLanguageDayES,
  cleanTypenameDisponibility,
} from "../../../utils";
import useUser from "../../../Hooks/useUser";

type PropsEditSchedule = {
  onClose: () => void;
  rangeHour: RangeHour;
  index: number;
  day: string;
  loading?: boolean;
  service: Omit<Service, "reservations" | "sportCenterId" | "__typename">;
  editSchedule: (input: UpdateServiceInput) => void;
};
const EditSchedule = ({
  rangeHour,
  index,
  onClose,
  service,
  editSchedule,
  day,
  loading,
}: PropsEditSchedule) => {
  const { user } = useUser();
  let rangeHourAux: RangeHour;

  function updateSchedule() {
    const disp = cleanTypenameDisponibility(
      service as Service
    ) as Disponibility;
    const dayEn = changeLanguageDayES(day);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const disponibilityDay = disp[Weekday[dayEn as Weekday]]?.map(
      (range, i) => {
        if (i === index) {
          const { __typename, ...rest } = rangeHourAux;
          const aux = {
            startHour: rest.startHour ?? rangeHour.startHour,
            endHour: rest.endHour ?? rangeHour.endHour,
            price: rest.price ?? rangeHour.price,
          };
          return aux;
        } else {
          return range;
        }
      }
    );
    const disponibility = { ...disp, [dayEn]: disponibilityDay };
    console.log({
      ...service,
      sportCenterId: user?.uid!,
      image: service.image,
      disponibility: disponibility as UpdateDisponibilityInput,
    });
    editSchedule({
      ...service,
      sportCenterId: user?.uid!,
      image: service.image,
      disponibility: disponibility as UpdateDisponibilityInput,
    });
    !loading && onClose();
  }

  return (
    <div>
      <div className="flex justify-between gap-5">
        <CustomInput
          color="blue"
          type="time"
          label="Hora inicio"
          required
          defaultValue={rangeHour.startHour}
          onChange={(e) => {
            rangeHourAux = { ...rangeHour, startHour: e.target.value };
          }}
        />
        <CustomInput
          color="blue"
          type="time"
          label="Hora fin"
          required
          defaultValue={rangeHour.endHour}
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
          defaultValue={rangeHour.price}
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
          title="Actualizar"
          disable={loading}
          type="button"
          onClick={updateSchedule}
        />
      </div>
    </div>
  );
};

export default EditSchedule;
