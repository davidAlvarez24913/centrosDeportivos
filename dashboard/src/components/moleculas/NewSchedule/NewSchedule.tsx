import { RangeHour } from "schema";
import { CustomButton, CustomInput } from "../../atomos";

type PropsNewSchedule = {
  onClose: () => void;
  rangeHour: RangeHour[];
};
const NewSchedule = ({ rangeHour, onClose }: PropsNewSchedule) => {
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
            console.log(e.target.value);
            rangeHourAux = { startHour: e.target.value, endHour: "", price: 0 };
          }}
        />
        <CustomInput
          color="blue"
          type="time"
          label="Hora fin"
          required
          onChange={(e) => {
            console.log(e.target.value);
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
          type="button"
          onClick={() => {
            rangeHour.push(rangeHourAux);
            console.log(rangeHour);
            // onClose();
          }}
        />
      </div>
    </div>
  );
};

export default NewSchedule;
