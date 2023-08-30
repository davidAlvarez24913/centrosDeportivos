import React from "react";
import { MainCard } from "src/components/atomos";

type ReservationProps = {
  title: string;
  service: string;
  schedule: string;
  paymentStatus: boolean;
};
const ReservationCard = ({
  title,
  service,
  schedule,
  paymentStatus,
}: ReservationProps) => {
  return (
    <MainCard>
      <div className="flex flex-row gap-6 justify-between cursor-pointer px-4 py-2">
        <div className="flex flex-col w-2/3">
          <h2 className="text-xl font-bold">{title}</h2>
          <h3 className="text-base font-medium leading-3">{service}</h3>
          <div className="flex flex-row items-center gap-2 pt-2">
            <img
              src="assets/icon/schedule.svg"
              alt="sportIcon"
              className="w-5 rounded-r-2xl"
            />
            <p className="font-light text-xs leading-4 ">{schedule}</p>
          </div>
        </div>
        <div className="w-1/3">
          <h2 className="text-xl font-bold">Pago</h2>
          {paymentStatus ? (
            <h3 className="text-base font-semibold text-error">Pendiente</h3>
          ) : (
            <h3 className="text-base font-semibold text-primary">Pagado</h3>
          )}
        </div>
      </div>
    </MainCard>
  );
};

export default ReservationCard;
