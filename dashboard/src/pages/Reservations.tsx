import React, { useEffect, useState } from "react";
import { LayoutPage, Table } from "../components/moleculas";
import {
  AllReviews,
  ReservationsRow,
  ReviewsRow,
} from "../components/organismos";
import useUser from "../Hooks/useUser";
import {
  ReservationNames,
  useGetNameSportCenterQuery,
  useListReviewsBySportCenterQuery,
  useListScReservationsQuery,
} from "schema";
import { Loading } from "../components/atomos";

const ReservationsPage = () => {
  const { user } = useUser();
  const sportCenterId = user?.uid!;
  const status = useGetNameSportCenterQuery({
    variables: { sportCenterId: sportCenterId },
  });
  const { loading, data, refetch } = useListScReservationsQuery({
    variables: { sportCenterId: sportCenterId },
  });
  const statusReviews = useListReviewsBySportCenterQuery({
    variables: { sportCenterId: sportCenterId },
  });

  const auxReservations =
    data?.listSCReservations?.map((result) => {
      return result!;
    }) || [];

  const [reservations, setReservations] =
    useState<ReservationNames[]>(auxReservations);

  useEffect(() => {
    refetch();
    const auxReservations =
      data?.listSCReservations?.map((result) => {
        return result!;
      }) || [];
    setReservations(auxReservations);
  }, [data?.listSCReservations, refetch]);

  const paidReservations = reservations.filter(
    (result) => result.reservation?.state! === true
  );
  const unPaidReservations = reservations?.filter(
    (result) =>
      result.reservation?.state! === false &&
      result.reservation?.paymentId === ""
  );
  const unCheckedReservations = reservations?.filter(
    (result) =>
      result.reservation?.state! === false &&
      result.reservation?.paymentId !== ""
  );
  const paidRows = paidReservations?.map((result, index) => {
    const reservation = result?.reservation!;
    return (
      <ReservationsRow
        refetch={refetch}
        {...reservation}
        reservationPrice={reservation?.reservationPrice.toString()}
        serviceName={result?.serviceName || ""}
        userName={result?.userName || ""}
        key={index}
      />
    );
  });
  const unPainRows = unPaidReservations?.map((result, index) => {
    const reservation = result?.reservation!;
    return (
      <ReservationsRow
        refetch={refetch}
        {...reservation}
        reservationPrice={reservation?.reservationPrice.toString()}
        serviceName={result?.serviceName || ""}
        userName={result?.userName || ""}
        key={index}
      />
    );
  });
  const unCheckedRows = unCheckedReservations?.map((result, index) => {
    const reservation = result?.reservation!;
    return (
      <ReservationsRow
        refetch={refetch}
        {...reservation}
        reservationPrice={reservation?.reservationPrice.toString()}
        serviceName={result?.serviceName || ""}
        userName={result?.userName || ""}
        key={index}
      />
    );
  });
  const reviews = statusReviews.data?.listReviewsBySportCenter;
  function getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  const edades = auxReservations.map((item) => getAge(item.birthDate!));

  const aux = paidReservations.map(
    (item) => item.reservation?.reservationPrice!
  );
  const income = aux.reduce((a, b) => a + b, 0);
  const ageMean = edades.reduce((a, b) => a + b, 0) / edades.length;
  return (
    <LayoutPage nameSportCenter={status.data?.getSportCenter?.name || ""}>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-row justify-between ">
          <div className="w-2/3">
            <div className="flex flex-row justify-between mb-3 text-white">
              <div className="shadow-lg bg-background p-4 w-[200px] rounded-lg">
                <h2 className="font-bold ">Total de reservaciones</h2>
                <span>{reservations.length}</span>
              </div>
              <div className="shadow-lg bg-background p-3 w-[200px] rounded-lg">
                <h2 className="font-bold">Total de ganancias</h2>
                <span>{income}</span>
              </div>
              <div className="shadow-lg bg-background p-3 w-[200px] rounded-lg">
                <h2 className="font-bold">Media de Edad</h2>
                <span>{edades.length === 0 ? 0 : ageMean}</span>
              </div>
            </div>
            <h2 className="text-xl font-bold">
              Por Pagar | N: {unPaidReservations.length}
            </h2>
            <Table
              headers={[
                "ID",
                "servicios",
                "fecha",
                "usuario",
                "horario",
                "precio",
                "ver mas",
              ]}
              data={unPainRows!}
            />
            <h2 className="text-xl font-bold">
              Pendientes confirmación de transferencia | N:{" "}
              {unCheckedReservations.length}
            </h2>
            <Table
              headers={[
                "ID",
                "servicios",
                "fecha",
                "usuario",
                "horario",
                "precio",
                "ver mas",
              ]}
              data={unCheckedRows!}
            />
            <h2 className="text-xl font-bold">
              Pagadas | N: {paidReservations.length}
            </h2>
            <Table
              headers={[
                "ID",
                "servicios",
                "fecha",
                "usuario",
                "horario",
                "precio",
                "ver mas",
              ]}
              data={paidRows!}
            />
          </div>
          <AllReviews reviews={reviews || []} />
        </div>
      )}
    </LayoutPage>
  );
};
export default ReservationsPage;
