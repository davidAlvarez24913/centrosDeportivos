import { CustomButton } from "../../atomos";
import { covertDateToStringEs } from "../../../utils";

type ModalConfirmBookingProps = {
  onClose: () => void;
  hours: string[];
  price: number;
  date: string;
  serviceId: string;
  onCreateRervation: () => void;
};
const ModalConfirmBooking = ({
  onClose,
  hours,
  price,
  date,
  serviceId,
  onCreateRervation,
}: ModalConfirmBookingProps) => {
  return (
    <div>
      <div className="my-2">
        <h2 className="font-semibold">Fecha</h2>
        <p>{covertDateToStringEs(date)}</p>
      </div>
      <div className="my-2">
        <h2 className="font-semibold">Horario</h2>
        {typeof hours === "string" && <p>{hours}</p>}
        <div>
          {typeof hours === "object" && (
            <div>
              {hours.map((h, index) => {
                return <p key={index}>{index + 1 + ". " + h}</p>;
              })}
            </div>
          )}
        </div>
        <div className="my-2">
          <h2 className="font-semibold">Precio</h2>
          <p>{price}</p>
        </div>
        <div className="flex gap-4">
          <CustomButton
            color="cancel"
            title="Cancelar"
            type="button"
            onClick={onClose}
          />
          <CustomButton
            color="sucessfull"
            title="Confirmar"
            type="button"
            onClick={onCreateRervation}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmBooking;
