import React, { useState } from "react";
import Modal from "../../moleculas/Modal";
import { ReservationCard } from "../../moleculas";

type ReservationsRowProps = {
  reservationId: string;
  serviceName: string;
  rangeHour: string;
  reservationPrice: string;
  state: boolean;
  date: string;
  paymentId: string;
};
const ReservationsRow = (reservation: ReservationsRowProps) => {
  const [modal, setModal] = useState(false);
  const { reservationId, serviceName, rangeHour, reservationPrice } =
    reservation;
  return (
    <>
      <tr className="border-b border-background">
        <th className="px-3 py-5">
          <p className="text-start text-sm font-normal">{reservationId}</p>
        </th>
        <th className="py-5">
          <p className="text-start text-sm font-normal">{serviceName}</p>
        </th>
        <th className="py-5">
          <p className="text-start text-sm font-normal">{rangeHour}</p>
        </th>
        <th className="py-5">
          <p className="text-start text-sm font-normal">$ {reservationPrice}</p>
        </th>
        <th className="">
          <img
            src="icons/show-more.svg"
            alt="show more icon"
            className="cursor-pointer px-3"
            onClick={() => setModal(true)}
          />
        </th>
      </tr>
      <Modal
        title={`Reserva N: ${reservationId}`}
        modalState={modal}
        closeModal={() => {
          setModal(false);
        }}
      >
        <ReservationCard {...reservation} />
      </Modal>
    </>
  );
};

export default ReservationsRow;
