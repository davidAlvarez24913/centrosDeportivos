import React from "react";
import { Service } from "schema";
import { CustomButton } from "../../atomos";

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
      <CustomButton
        color="blue"
        title="Agregar horario"
        type="button"
        addIcon
      />

      <br />
    </div>
  );
};

export default ServiceModal;
