import React from "react";
import { MainCard } from "src/components/atomos";
import FullReservation from "./FullReservation";

type ReservationProps = {
  reservationId: string;
  serviceName: string;
  sportCenterName: string;
  rangeHour: string[];
  reservationPrice: number;
  state: boolean;
  date: string;
  paymentId: string;
};
const ReservationCard = (reservation: ReservationProps) => {
  const { reservationId, sportCenterName, serviceName, rangeHour, state } =
    reservation;
  return (
    <MainCard>
      <div
        className="flex flex-row gap-6 justify-between cursor-pointer px-4 py-2"
        id={`open-reservation-${reservationId}-modal`}
      >
        <div className="flex flex-col w-2/3">
          <h2 className="text-xl font-bold">{sportCenterName}</h2>
          <h3 className="text-base font-medium leading-3">{serviceName}</h3>
          <div className="flex flex-row items-center gap-2 pt-2">
            <img
              src="assets/icon/schedule.svg"
              alt="sportIcon"
              className="w-5 rounded-r-2xl"
            />
            <p className="font-light text-xs leading-4 ">{rangeHour}</p>
          </div>
        </div>
        <div className="w-1/3">
          <h2 className="text-xl font-bold">Pago</h2>
          {state ? (
            <h3 className="text-base font-semibold text-primary">Pagado</h3>
          ) : (
            <h3 className="text-base font-semibold text-error">Pendiente</h3>
          )}
        </div>
      </div>
      <FullReservation {...reservation} />
    </MainCard>
  );
};

export default ReservationCard;
