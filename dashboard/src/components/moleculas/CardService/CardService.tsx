import { useState } from "react";
import Modal from "../Modal";
import ServiceModal from "../ServiceModal";
import { Service } from "schema";
import { getStringUrl } from "../../../utils";

type PropsCardService = {
  service: Omit<
    Service,
    "ranking" | "reservations" | "sportCenterId" | "__typename"
  >;
};

const CardService = ({ service }: PropsCardService) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div
        className="rounded-lg flex flex-col"
        onClick={() => {
          setModal(true);
        }}
        role="button"
      >
        <img
          src={getStringUrl(service.image!) ?? "/image 9 .png"}
          alt={service.name}
          className="rounded-lg w-full"
        />
        <h2 className="text-customText font-semibold -mt-11 ml-4 text-2xl">
          {service.name}
        </h2>
      </div>
      <Modal
        title={service.name ?? "Cancha1"}
        modalState={modal}
        closeModal={() => {
          setModal(false);
        }}
      >
        <ServiceModal
          service={service}
          onClose={() => {
            setModal(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default CardService;
