import React from "react";
import { CustomButton } from "../../atomos";
import { useDeleteReservationMutation, useSetPaidMutation } from "schema";
import { covertDateToStringEs } from "../../../utils";
import { toast } from "react-toastify";

type ReservationCardProps = {
  reservationId: string;
  serviceName: string;
  userName: string;
  image: string;
  rangeHour: string[];
  reservationPrice: string;
  state: boolean;
  date: string;
  paymentId: string;
  refetch: () => void;
};

const ReservationCard = ({
  reservationId,
  serviceName,
  userName,
  rangeHour,
  image,
  reservationPrice,
  state,
  date,
  paymentId,
  refetch,
}: ReservationCardProps) => {
  const [deleteReservation] = useDeleteReservationMutation();
  const [setPaid] = useSetPaidMutation();
  return (
    <>
      <th className="flex flex-row justify-between py-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Servicio:</h2>
          <p className="text-base font-normal">{serviceName}</p>
          <h2 className="text-lg font-bold">Fecha:</h2>
          <p className="text-base font-normal">{covertDateToStringEs(date)}</p>
          <h2 className="text-lg font-bold">Servicio</h2>
          <ul className="list-disc text-base font-normal ml-5">
            {rangeHour.map((hour) => {
              return <li>{hour}</li>;
            })}
          </ul>
          <h2 className="text-lg font-bold">ID Transferencia:</h2>
          <p className="text-base font-normal">{paymentId}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Usuario:</h2>
          <p className="text-base font-normal">{userName}</p>
          <h2 className="text-lg font-bold">Estado del pago:</h2>
          {state ? (
            <p className="text-base font-normal">Pagado</p>
          ) : (
            <p className="text-base font-normal">Pendiente</p>
          )}
          <h2 className="text-lg font-bold">Precio:</h2>
          <p className="text-base font-normal">$ {reservationPrice}</p>
        </div>
      </th>
      {image !== "" && (
        <img src={image} alt="comprobante transferencia" className="pb-3" />
      )}
      {!state && (
        <div className="flex flex-row  gap-4">
          <CustomButton
            color="cancel"
            title="Eliminar"
            type="button"
            onClick={() => {
              deleteReservation({
                variables: { reservationId: reservationId },
                onCompleted() {
                  toast.success("Reserva elimida", {
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
                onError(error) {
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
            }}
          />
          <CustomButton
            color="sucessfull"
            title="Pagada"
            type="button"
            onClick={() => {
              refetch();
              setPaid({
                variables: {
                  reservationId: reservationId,
                },
                onCompleted() {
                  toast.success("Reserva Pagada", {
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
                onError(error) {
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
            }}
          />
        </div>
      )}
    </>
  );
};

export default ReservationCard;
