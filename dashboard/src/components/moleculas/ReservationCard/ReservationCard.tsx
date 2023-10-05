import React from "react";
import { CustomButton } from "../../atomos";

type ReservationCardProps = {
  reservationId: string;
  serviceName: string;
  rangeHour: string;
  reservationPrice: string;
  state: boolean;
  date: string;
  paymentId: string;
};

const ReservationCard = ({
  reservationId,
  serviceName,
  rangeHour,
  reservationPrice,
  state,
  date,
  paymentId,
}: ReservationCardProps) => {
  return (
    <div>
      <div className="flex flex-row justify-between py-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Servicio:</h2>
          <p className="text-base">{serviceName}</p>
          <h2 className="text-lg font-bold">Fecha:</h2>
          <p className="text-base">{date}</p>
          <h2 className="text-lg font-bold">Servicio</h2>
          <p className="text-base">{rangeHour}</p>
          <h2 className="text-lg font-bold">ID Transferencia:</h2>
          <p className="text-base">{paymentId}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Estado del pago:</h2>
          {state ? (
            <p className="text-base">Pagado</p>
          ) : (
            <p className="text-base">Pendiente</p>
          )}
          <h2 className="text-lg font-bold">Precio:</h2>
          <p className="text-base">$ {reservationPrice}</p>
        </div>
      </div>
      {!state && (
        <div className="flex flex-row  gap-4">
          <CustomButton color="cancel" title="Cancelar" type="button" />
          <CustomButton color="sucessfull" title="Pagada" type="button" />
        </div>
      )}
    </div>
  );
};

export default ReservationCard;
