import { useState } from "react";
import Modal from "../Modal";
import ServiceModal from "../ServiceModal";
import {
  Service,
  UpdateServiceInput,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} from "schema";
import { getStringUrl } from "../../../utils";
import ModalEditService from "../ModalEditService";

type PropsCardService = {
  onRefetch: () => void;
  service: Omit<
    Service,
    "ranking" | "reservations" | "sportCenterId" | "__typename"
  >;
};

const CardService = ({ service, onRefetch }: PropsCardService) => {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [updateServiceMutation] = useUpdateServiceMutation();
  const [deleteServiceMutation] = useDeleteServiceMutation();

  const onUpdate = (input: UpdateServiceInput) => {
    updateServiceMutation({
      variables: { input },
      onCompleted: () => {
        onRefetch();
        alert("se actualiza el servicio exitosamente");
        setModalEdit(false);
      },
      onError: (err) => {
        console.log(JSON.parse(JSON.stringify(err as Error)));
        alert(
          "No se pudo actualizar el servicio: " + JSON.stringify(err as Error)
        );
      },
    });
  };
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
          src={getStringUrl(service.image!) ?? "/images/default-service.jpeg"}
          alt={service.name}
          className="rounded-lg w-80 h-52"
        />
        <h2 className="text-customText font-semibold -mt-11 ml-4 text-2xl">
          {service.name}
        </h2>
      </div>
      <Modal
        title={service.name ?? "Cancha1"}
        modalState={modal}
        moreOptions={true}
        onEdit={() => {
          // close active modal
          setModal(false);
          //open modal edit
          setModalEdit(true);
        }}
        onDelete={() => {
          // eslint-disable-next-line no-restricted-globals
          if (confirm("Esta seguro de eliminar el servicio")) {
            deleteServiceMutation({
              variables: { serviceId: service.serviceId },
              onCompleted: () => {
                onRefetch();
                setModal(false);
                console.log("servico eliminado");
              },
              onError: (err) => {
                console.error("Error servicio no eliminado: " + err);
              },
            });
          }
        }}
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
      <Modal
        title="Editar Servicio"
        closeModal={() => {
          setModalEdit(false);
        }}
        modalState={modalEdit}
      >
        <ModalEditService service={service} onUpdate={onUpdate} />
      </Modal>
    </div>
  );
};

export default CardService;
