import { useCreateReservationScMutation } from "schema";
import useUser from "../../../Hooks/useUser";
import { CustomButton } from "../../atomos";
import { covertDateToStringEs } from "../../../utils";

type ModalConfirmBookingProps = {
  onClose: () => void;
  hours: string[];
  price: number;
  date: string;
  serviceId: string;
  onRefetch: () => void;
};
const ModalConfirmBooking = ({
  onClose,
  hours,
  price,
  date,
  serviceId,
  onRefetch,
}: ModalConfirmBookingProps) => {
  const userId = useUser().user?.uid;
  const [createReservationMutation] = useCreateReservationScMutation();

  const onCreateRervation = () => {
    const auxInput = {
      reservationPrice: price,
      rangeHour: hours,
      date: new Date(date).toDateString(),
      serviceId: serviceId,
      userId: userId!,
      paymentId: "",
      image: "",
    };
    createReservationMutation({
      variables: { input: auxInput },
      onCompleted: (data) => {
        alert("Reserva creada exitosamente");
        onRefetch();
        onClose();
      },
      onError: (error) => {
        alert(error);
      },
    });
  };

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
