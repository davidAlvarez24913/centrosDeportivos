import React, { useState } from "react";
import {
  RangeHour,
  Service,
  UpdateServiceInput,
  useUpdateServiceMutation,
} from "schema";
import { CustomButton } from "../../atomos";
import ScheduleContent from "../ScheduleContent";
import Modal from "../Modal";
import ModalNewBook from "../ModalNewBook";
import { getStringUrl } from "../../../utils";

type ServiceFormProps = {
  onClose: () => void;
  onRefetch: () => void;
  onUpdate: (input: UpdateServiceInput) => void;
  loading: boolean;
  service: Omit<
    Service,
    "ranking" | "reservations" | "sportCenterId" | "__typename"
  >;
};

const ServiceModal = ({
  onClose,
  service,
  onRefetch,
  onUpdate,
  loading,
}: ServiceFormProps) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="py-2">
        <img
          src={getStringUrl(service.image!) ?? "/images/default-service.jpeg"}
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
        service={service as Service}
        rangeHourList={
          (service.disponibility?.Monday as RangeHour[]) ?? ([] as RangeHour[])
        }
        scheduelId="11"
        day="Lunes"
        mutationSchedule={onUpdate}
        loading={loading}
      />
      <ScheduleContent
        service={service as Service}
        rangeHourList={
          (service.disponibility?.Tuesday as RangeHour[]) ?? ([] as RangeHour[])
        }
        scheduelId="11"
        day="Martes"
        mutationSchedule={onUpdate}
        loading={loading}
      />
      <ScheduleContent
        service={service as Service}
        rangeHourList={
          (service.disponibility?.Wednesday as RangeHour[]) ??
          ([] as RangeHour[])
        }
        scheduelId="11"
        day="Miercoles"
        mutationSchedule={onUpdate}
        loading={loading}
      />
      <ScheduleContent
        service={service as Service}
        rangeHourList={
          (service.disponibility?.Thursday as RangeHour[]) ??
          ([] as RangeHour[])
        }
        scheduelId="11"
        day="Jueves"
        mutationSchedule={onUpdate}
        loading={loading}
      />
      <ScheduleContent
        service={service as Service}
        rangeHourList={
          (service.disponibility?.Friday as RangeHour[]) ?? ([] as RangeHour[])
        }
        scheduelId="11"
        day="Viernes"
        mutationSchedule={onUpdate}
        loading={loading}
      />
      <ScheduleContent
        service={service as Service}
        rangeHourList={
          (service.disponibility?.Saturday as RangeHour[]) ??
          ([] as RangeHour[])
        }
        scheduelId="11"
        day="Sabado"
        mutationSchedule={onUpdate}
        loading={loading}
      />
      <ScheduleContent
        service={service as Service}
        rangeHourList={
          (service.disponibility?.Sunday as RangeHour[]) ?? ([] as RangeHour[])
        }
        scheduelId="11"
        day="Domingo"
        mutationSchedule={onUpdate}
        loading={loading}
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
