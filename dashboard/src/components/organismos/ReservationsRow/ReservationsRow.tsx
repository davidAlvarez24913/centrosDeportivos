import React, { useState } from "react";
import Modal from "../../moleculas/Modal";
import { ReservationCard } from "../../moleculas";

type ReservationsRowProps = {
  reservationId: string;
  serviceName: string;
  schedule: string;
  price: string;
  state: boolean;
  date: string;
  paymetId: string;
};
const ReservationsRow = (reservation: ReservationsRowProps) => {
  const [modal, setModal] = useState(false);
  const { reservationId, serviceName, schedule, price } = reservation;
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
          <p className="text-start text-sm font-normal">{schedule}</p>
        </th>
        <th className="py-5">
          <p className="text-start text-sm font-normal">$ {price}</p>
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
