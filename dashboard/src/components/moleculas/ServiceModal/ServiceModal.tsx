import React from "react";
import { Service, Weekday } from "schema";
import { CustomButton } from "../../atomos";
import ScheduleContent from "../ScheduleContent";

type ServiceFormProps = {
  onClose: () => void;
  service: Omit<
    Service,
    "ranking" | "reservations" | "sportCenterId" | "__typename"
  >;
};

const ServiceModal = ({ onClose, service }: ServiceFormProps) => {
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
    </div>
  );
};

export default ServiceModal;
