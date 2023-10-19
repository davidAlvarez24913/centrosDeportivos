import { useEffect, useState } from "react";
import { CustomButton } from "../../atomos";
import BodyDisponibility from "../../organismos/BodyDisponibility";
import Modal from "../Modal/Modal";
import ModalConfirmBooking from "../ModalConfirmBooking";
import {
  useCreateReservationScMutation,
  useGetDisponibilityQuery,
} from "schema";
import { daysDisponibility } from "../../../utils";
import useUser from "../../../Hooks/useUser";
import { toast } from "react-toastify";
type NewBookProps = {
  onClose: () => void;
  serviceId: string;
  nameService: string;
};

type PropsAvailableHours = {
  rangeHour: string;
  available: boolean;
  price: number;
};

const ModalNewBook = ({ onClose, serviceId, nameService }: NewBookProps) => {
  //hooks ui
  const [modalConfirm, setModalConfirm] = useState(false);
  const [days, setDays] = useState(daysDisponibility()); // days to show

  //hooks data
  const [price, setPrice] = useState(0.0);
  const [day, setDay] = useState<string>(new Date().toDateString());
  const [selectedHours, setSelectedHours] = useState<string[]>([]);
  const userId = useUser().user?.uid;

  //hook get disponibility
  const disponibility = useGetDisponibilityQuery({
    variables: { serviceId: serviceId, date: new Date(day).toDateString() },
  });
  const [createReservationMutation] = useCreateReservationScMutation();
  const auxHours = disponibility.data?.getDisponibility?.map((element) => {
    return {
      rangeHour: element?.rangeHour,
      available: false,
      price: element?.price,
    };
  }) as PropsAvailableHours[];

  const [hours, setHours] = useState<PropsAvailableHours[]>(auxHours);

  useEffect(() => {
    !disponibility.loading && setHours(auxHours);
  }, [day, disponibility.loading, disponibility.data?.getDisponibility]);

  const onCreateRervation = () => {
    const auxInput = {
      reservationPrice: price,
      rangeHour: selectedHours,
      date: new Date(day).toDateString(),
      serviceId: serviceId,
      userId: userId!,
      paymentId: "",
      image: "",
    };
    createReservationMutation({
      variables: { input: auxInput },
      onCompleted: () => {
        disponibility.refetch();
        toast.success("Reserva creada exitosamente!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setModalConfirm(false);
      },
      onError: () => {
        toast.error("No se pudo crear la reservación, intentalo mas tarde", {
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

  return (
    <div>
      <div className="flex flex-col gap-4 py-4">
        <h2 className="font-semibold text-lg ">Valor total: ${price}</h2>
        <h1 className="font-semibold text-lg ">Fecha</h1>
        <BodyDisponibility
          setDay={setDay}
          days={days}
          hours={hours}
          setDays={setDays}
          setHours={setHours}
          setPrice={setPrice}
          selectedHour={selectedHours}
          getHour={setSelectedHours}
          loading={disponibility.loading}
        ></BodyDisponibility>
      </div>
      <div className="flex content-end mt-20">
        <CustomButton
          title="Reservar"
          color="blue"
          type="button"
          onClick={() => {
            setModalConfirm(true);
          }}
        />
      </div>
      <Modal
        title={nameService || ""}
        modalState={modalConfirm}
        closeModal={() => {
          setModalConfirm(false);
        }}
      >
        <ModalConfirmBooking
          price={price}
          serviceId={serviceId}
          date={day}
          hours={selectedHours}
          onCreateRervation={onCreateRervation}
          onClose={() => {
            setModalConfirm(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default ModalNewBook;
