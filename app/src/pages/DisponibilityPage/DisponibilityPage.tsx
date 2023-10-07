import { IonContent, IonPage, useIonRouter, useIonToast } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Background, CustomButton, Header } from "src/components/atomos";
import { BodyDisponibility } from "src/components/organismos";
import ModalInfoBooking from "./ModalInfoBooking";
import { useParams } from "react-router";
import {
  CreateReservationInput,
  Disponibility,
  RangeHour,
  Weekday,
  useCreateReservationUserMutation,
  useGetDisponibilityQuery,
  useGetReservationsByDateQuery,
} from "schema";
import { daysDisponibility, getDayString } from "src/utils";
import useUser from "src/Hooks/useUser";

type PropsAvailableHours = {
  rangeHour: string;
  available: boolean;
  price: number;
};

const DisponibilityPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const router = useIonRouter();
  const [present] = useIonToast();
  const userId = useUser().user?.uid;

  const [price, setPrice] = useState(0.0);
  const [days, setDays] = useState(daysDisponibility());
  const [hours, setHours] = useState<PropsAvailableHours[] | undefined>();

  //hooks data
  const [day, setDay] = useState<string>(new Date().toDateString());
  const [selectedHours, setSelectedHours] = useState<string[]>([]);

  //hook get reservations
  const status = useGetReservationsByDateQuery({
    variables: { date: new Date(day).toDateString(), serviceId: serviceId },
  });
  const disp = useGetDisponibilityQuery({
    variables: { serviceId: serviceId },
  });

  //mutation create reservation
  const [createReservationInputMutation, { data, loading }] =
    useCreateReservationUserMutation();

  const onCreateBooking = () => {
    const input = {
      date: new Date(day).toDateString(),
      paymentId: "",
      image: "",
      rangeHour: selectedHours,
      reservationPrice: price,
      serviceId: serviceId,
      userId: userId,
    } as CreateReservationInput;
    // verify type to send mutation
    createReservationInputMutation({
      variables: { input },
      onCompleted: () => {
        disp.refetch();
        status.refetch();
        present({
          message: "Reservacion realizada exitosamente",
          duration: 1500,
          color: "success",
          position: "top",
        });
      },
      onError: (error) => {
        present({
          message: "No se pudo realizar la reservacion " + error.message,
          duration: 1500,
          color: "danger",
          position: "top",
        });
      },
    });
  };
  const getDisponibility = (day: string) => {
    // map hours by date
    const dayString = getDayString(day);

    const { __typename, ...rest } =
      disp.data?.getDisponibility ?? ([] as Disponibility);

    const dispByDay = rest[Weekday[dayString as Weekday]];

    const result = dispByDay?.map((hour) => {
      //map to clean typename
      const { __typename, ...rest } = hour as RangeHour;
      return {
        rangeHour: rest.startHour + " - " + rest.endHour,
        available: false,
        price: rest.price,
      };
    });
    return result;
  };

  const reservationsRangeHour: string[] = [];

  useEffect(() => {
    if (!status.loading) {
      status.data?.getReservationsByDate?.forEach((reservation) => {
        if (reservation?.state) {
          reservation.rangeHour?.forEach((h) => {
            reservationsRangeHour.push(h as string);
          });
        }
      });
    }

    const availableHoursFiltered = getDisponibility(day as string)?.filter(
      (h) => !reservationsRangeHour.includes(h.rangeHour)
    );
    setHours(availableHoursFiltered);
  }, [day, status.loading, status.data?.getReservationsByDate]);

  useEffect(() => {
    if (hours) {
      const prices = hours
        .filter((hour) => hour.available === true)
        .map((_) => _.price);
      const total = prices?.reduce((a, b) => a + b, 0);
      setPrice(total);
    }
  }, [selectedHours]);
  return (
    <IonPage>
      <Header
        title={serviceId}
        dismiss={() => {
          router.goBack();
        }}
      />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-4 py-4">
            <h1>name service</h1>
            <h2>Valor total: ${price}</h2>
            <h1>Fecha</h1>
            <BodyDisponibility
              setDay={setDay}
              days={days}
              hours={hours as PropsAvailableHours[]}
              setDays={setDays}
              setHours={setHours}
              setPrice={setPrice}
              selectedHour={selectedHours}
              getHour={setSelectedHours}
            ></BodyDisponibility>
          </div>
          <CustomButton
            color="sucessfull"
            type="button"
            title="RESERVAR"
            disable={selectedHours.length < 1}
            id="modal-info-booking"
          />
        </Background>
      </IonContent>
      <ModalInfoBooking
        data={data}
        loading={loading}
        date={day}
        hours={selectedHours}
        price={price}
        serviceId={serviceId}
        key={serviceId}
        onCreateBooking={onCreateBooking}
      />
    </IonPage>
  );
};

export default DisponibilityPage;
