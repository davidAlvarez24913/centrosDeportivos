import React from "react";
import { CustomButton } from "../../atomos";
import { useDeleteReservationMutation, useSetPaidMutation } from "schema";

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
}: ReservationCardProps) => {
  const [deleteReservation] = useDeleteReservationMutation();
  const [setPaid] = useSetPaidMutation();
  return (
    <>
      <th className="flex flex-row justify-between py-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Servicio:</h2>
          <p className="text-base">{serviceName}</p>
          <h2 className="text-lg font-bold">Fecha:</h2>
          <p className="text-base">{date}</p>
          <h2 className="text-lg font-bold">Servicio</h2>
          <ul className="list-disc text-base ml-5">
            {rangeHour.map((hour) => {
              return <li>{hour}</li>;
            })}
          </ul>
          <h2 className="text-lg font-bold">ID Transferencia:</h2>
          <p className="text-base">{paymentId}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Usuario:</h2>
          <p className="text-base">{userName}</p>
          <h2 className="text-lg font-bold">Estado del pago:</h2>
          {state ? (
            <p className="text-base">Pagado</p>
          ) : (
            <p className="text-base">Pendiente</p>
          )}
          <h2 className="text-lg font-bold">Precio:</h2>
          <p className="text-base">$ {reservationPrice}</p>
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
              }).then(() => {
                alert("Reserva Eliminada");
              });
            }}
          />
          <CustomButton
            color="sucessfull"
            title="Pagada"
            type="button"
            onClick={() => {
              setPaid({
                variables: {
                  reservationId: reservationId,
                },
              }).then(() => {
                alert("Reserva Pagada");
              });
            }}
          />
        </div>
      )}
    </>
  );
};

export default ReservationCard;
