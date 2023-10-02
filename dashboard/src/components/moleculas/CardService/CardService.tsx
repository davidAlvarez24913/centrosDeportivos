import { useEffect, useState } from "react";
import Modal from "../Modal";
import ServiceModal from "../ServiceModal";
import {
  Service,
  UpdateServiceInput,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} from "schema";
import ModalEditService from "../ModalEditService";
import ModalNewBook from "../ModalNewBook";

type PropsCardService = {
  onRefetch: () => void;
  service: Omit<
    Service,
    "ranking" | "reservations" | "sportCenterId" | "__typename"
  >;
};

const CardService = ({ service, onRefetch }: PropsCardService) => {
  const [modal, setModal] = useState(false);
  const [modalReservation, setModalReservation] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);
  const [updateServiceMutation, { loading }] = useUpdateServiceMutation();
  const [deleteServiceMutation] = useDeleteServiceMutation();

  const onUpdate = (input: UpdateServiceInput) => {
    updateServiceMutation({
      variables: { input },
      onCompleted: () => {
        onRefetch();
        alert("se actualizo el servicio exitosamente");
        setModalEdit(false);
      },
      onError: (err) => {
        alert(
          "No se pudo actualizar el servicio: " + JSON.stringify(err as Error)
        );
      },
    });
  };

  const onDelete = () => {
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
  };

  useEffect(() => {
    onRefetch();
  }, [onRefetch, updateServiceMutation]);
  return (
    <div>
      <div
        className="rounded-lg flex flex-col border border-black w-96 h-80"
        onClick={() => {
          setModal(true);
        }}
        role="button"
      >
        <img
          src={service.image ? service.image : "/default-image.jpg"}
          alt={service.name}
          className="rounded-t-lg h-5/6 object-fill"
        />
        <h2 className="text-customText font-semibold h-1/6 bg-background  rounded-b-lg  p-2 text-2xl">
          {service.name}
        </h2>
      </div>
      <Modal
        title={service.name ?? "Nombre servicio"}
        modalState={modal}
        moreOptions={true}
        onEdit={() => {
          // close active modal
          setModal(false);
          //open modal edit
          setModalEdit(true);
        }}
        onDelete={onDelete}
        closeModal={() => {
          setModal(false);
        }}
      >
        <ServiceModal
          service={service}
          onClose={() => {
            setModal(false);
          }}
          onRefetch={onRefetch}
          onUpdate={onUpdate}
          loading={loading}
          setModalReservation={setModalReservation}
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
      <>
        <Modal
          title={service.name ?? "Servicio"}
          modalState={modalReservation}
          closeModal={() => {
            setModalReservation(false);
          }}
        >
          <ModalNewBook
            onClose={() => {
              setModalReservation(false);
            }}
          />
        </Modal>
      </>
    </div>
  );
};

export default CardService;
