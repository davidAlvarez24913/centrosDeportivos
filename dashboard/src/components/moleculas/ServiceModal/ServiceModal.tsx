import React, { useEffect } from "react";
import { RangeHour, Service, UpdateServiceInput } from "schema";
import { CustomButton } from "../../atomos";
import ScheduleContent from "../ScheduleContent";

type ServiceFormProps = {
  onClose: () => void;
  onRefetch: () => void;
  onUpdate: (input: UpdateServiceInput) => void;
  loading: boolean;
  flagDispopinibility: boolean;
  service: Omit<
    Service,
    "ranking" | "reservations" | "sportCenterId" | "__typename"
  >;
  setModalReservation: React.Dispatch<React.SetStateAction<boolean>>;
};

const ServiceModal = ({
  onClose,
  service,
  onRefetch,
  onUpdate,
  loading,
  setModalReservation,
  flagDispopinibility,
}: ServiceFormProps) => {
  useEffect(() => {
    onRefetch();
  });
  return (
    <div>
      <div className="py-2">
        <img
          src={service.image === "" ? "/default-image.jpg" : service.image!}
          alt={service.name}
          className="w-full max-h-72 object-fill rounded-lg"
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
          title={
            flagDispopinibility
              ? "No exiten horarios asignados"
              : "Crear Reservacion"
          }
          addIcon={!flagDispopinibility}
          disable={flagDispopinibility}
          color="blue"
          onClick={() => {
            setModalReservation(true);
            onClose();
          }}
          type="button"
        />
      </div>
    </div>
  );
};

export default ServiceModal;
