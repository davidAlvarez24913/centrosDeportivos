import { IonContent, IonPage, useIonRouter, useIonToast } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Background, CustomButton, Header } from "src/components/atomos";
import { BodyDisponibility } from "src/components/organismos";
import ModalInfoBooking from "./ModalInfoBooking";
import { useParams } from "react-router";
import {
  CreateReservationInput,
  useCreateReservationUserMutation,
  useGetDisponibilityQuery,
} from "schema";
import { daysDisponibility } from "src/utils";
import useUser from "src/Hooks/useUser";

type PropsAvailableHours = {
  rangeHour: string;
  available: boolean;
  price: number;
};

const DisponibilityPage = () => {
  const { info } = useParams<{
    info: string;
  }>();
  const { serviceId, sportCenter, nameService } = JSON.parse(info);
  const router = useIonRouter();
  const [present] = useIonToast();
  const userId = useUser().user?.uid;

  const [price, setPrice] = useState(0.0);
  const [days, setDays] = useState(daysDisponibility());

  //hooks data
  const [day, setDay] = useState<string>(new Date().toDateString());
  const [selectedHours, setSelectedHours] = useState<string[]>([]);

  //hook get reservations

  const disponibility = useGetDisponibilityQuery({
    variables: { serviceId: serviceId, date: new Date(day).toDateString() },
  });
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
  }, [day, disponibility.loading]);
  //mutation create reservation
  const [createReservationInputMutation, { data, loading }] =
    useCreateReservationUserMutation();

  const onCreateBooking = () => {
    if (userId) {
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
          disponibility.refetch();
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
    } else {
      present({
        message:
          "Debe ingresar sus credenciales para poder reazliar una reservación ",
        duration: 1500,
        color: "danger",
        position: "top",
      });
      router.push("/login");
    }
  };

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
        title={sportCenter}
        dismiss={() => {
          router.goBack();
        }}
      />
      <IonContent>
        <Background>
          <div className="flex flex-col gap-4 py-4">
            <h1 className="text-xl font-medium">{nameService}</h1>
            <h2>Valor total: ${price}</h2>
            <h1>Fecha</h1>
            <BodyDisponibility
              setDay={setDay}
              days={days}
              hours={hours as PropsAvailableHours[]}
              setDays={setDays}
              setHours={setHours}
              selectedHour={selectedHours}
              getHour={setSelectedHours}
              loading={disponibility.loading}
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
        sportCenter={sportCenter}
        nameService={nameService}
        key={serviceId}
        onCreateBooking={onCreateBooking}
      />
    </IonPage>
  );
};

export default DisponibilityPage;
