import React, { useState } from "react";
import { Service } from "schema";
import { CustomButton } from "../../atomos";
import ScheduleContent from "../ScheduleContent";
import Modal from "../Modal";
import ModalNewBook from "../ModalNewBook";

type ServiceFormProps = {
  onClose: () => void;
  service: Omit<
    Service,
    "ranking" | "reservations" | "sportCenterId" | "__typename"
  >;
};

const ServiceModal = ({ onClose, service }: ServiceFormProps) => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className="py-2">
        <img
          src={service.image ?? "/image 9.png"}
          alt={service.name}
          className="w-full rounded-lg"
        />
      </div>
      <p className="font-semibold">Descripcion: </p>
      <p>{service.description}</p>
      <div className="flex gap-4">
        <p className="font-semibold">Categoria - Deporte:</p>
        <p>{service.sport}</p>
      </div>
      <p className="font-semibold">Horarios</p>

      <ScheduleContent
        rangeHourList={[{ startHour: "09-00", endHour: "10:00", price: 20.0 }]}
        scheduelId="11"
        day="Lunes"
      />
      <ScheduleContent
        rangeHourList={[{ startHour: "09-00", endHour: "10:00", price: 20.0 }]}
        scheduelId="11"
        day="Martes"
      />
      <ScheduleContent
        rangeHourList={[{ startHour: "09-00", endHour: "10:00", price: 20.0 }]}
        scheduelId="11"
        day="Miercoles"
      />
      <ScheduleContent
        rangeHourList={[{ startHour: "09-00", endHour: "10:00", price: 20.0 }]}
        scheduelId="11"
        day="Jueves"
      />
      <ScheduleContent rangeHourList={[]} scheduelId="11" day="Viernes" />
      <ScheduleContent rangeHourList={[]} scheduelId="11" day="Sabado" />
      <ScheduleContent
        rangeHourList={[{ startHour: "09-00", endHour: "10:00", price: 20.0 }]}
        scheduelId="11"
        day="Domingo"
      />
      <div className="mt-2">
        <CustomButton
          title="Crear Reservacion"
          addIcon
          color="blue"
          onClick={() => {
            setModal(true);
          }}
          type="button"
        />
        <Modal
          title={service.name ?? "Cancha1"}
          modalState={modal}
          closeModal={() => {
            setModal(false);
          }}
        >
          <ModalNewBook
            onClose={() => {
              setModal(false);
            }}
          />
        </Modal>
      </div>
    </div>
  );
};

export default ServiceModal;
