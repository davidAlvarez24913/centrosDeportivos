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
import { toast } from "react-toastify";
import ModalCUstomSchedule from "../ModalCustomSchedule";

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
  const [customSchedule, setCustomSchedule] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);
  const [updateServiceMutation, { loading }] = useUpdateServiceMutation();
  const [deleteServiceMutation] = useDeleteServiceMutation();

  const onUpdate = (input: UpdateServiceInput) => {
    updateServiceMutation({
      variables: { input },
      onCompleted: () => {
        onRefetch();
        toast.success("Se actualizo el servicio exitosamente", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setModalEdit(false);
      },
      onError: (err) => {
        console.log(err);
        toast.error("No se pudo actualizar el servicio: ", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
    });
  };

  const onDelete = () => {
    deleteServiceMutation({
      variables: { serviceId: service.serviceId },
      onCompleted: () => {
        onRefetch();
        setModal(false);
        toast.success("Servicio eliminado correctamente!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
      onError: () => {
        toast.error("No se pudo eliminar el serivio, intentalo mas tarde", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
    });
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
        onCustomSchedule={() => setCustomSchedule(true)}
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
          flagDispopinibility={service.disponibility === null}
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
            serviceId={service.serviceId}
            nameService={service.name ?? "Nombre servicio"}
            onClose={() => {
              setModalReservation(false);
            }}
          />
        </Modal>
      </>
      <Modal
        title="Horario Personalizado"
        closeModal={() => {
          setCustomSchedule(false);
        }}
        modalState={customSchedule}
      >
        <ModalCUstomSchedule onClose={() => setCustomSchedule(false)} />
      </Modal>
    </div>
  );
};

export default CardService;
