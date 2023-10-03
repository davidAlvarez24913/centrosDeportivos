import { CustomButton } from "../../atomos";

type ModalConfirmBookingProps = {
  onClose: () => void;
  onCreateRervation: () => void;
  hours: string | string[];
  price: number;
  date: string;
};
const ModalConfirmBooking = ({
  onClose,
  onCreateRervation,
  hours,
  price,
  date,
}: ModalConfirmBookingProps) => {
  return (
    <div>
      <div className="my-2">
        <h2 className="font-semibold">Fecha</h2>
        <p>{date}</p>
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
