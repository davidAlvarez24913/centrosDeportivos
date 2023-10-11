import React, { useEffect, useState } from "react";
import { LayoutPage, Table } from "../components/moleculas";
import { ReservationsRow } from "../components/organismos";
import useUser from "../Hooks/useUser";
import {
  ReservationNames,
  useGetNameSportCenterQuery,
  useListScReservationsLazyQuery,
} from "schema";
import { Loading } from "../components/atomos";

const ReservationsPage = () => {
  const { user } = useUser();
  const sportCenterId = user?.uid!;
  const status = useGetNameSportCenterQuery({
    variables: { sportCenterId: sportCenterId },
  });
  const [listReservations, { loading }] = useListScReservationsLazyQuery();

  const [reservations, setReservations] = useState<ReservationNames[]>([]);
  useEffect(() => {
    listReservations({ variables: { sportCenterId: sportCenterId } }).then(
      (reservations) => {
        const result =
          reservations.data?.listSCReservations?.map((result) => {
            return result!;
          }) || [];
        setReservations(result);
      }
    );
  }, []);

  const paidReservations = reservations.filter(
    (result) => result.reservation?.state! === true
  );
  const unPaidReservations = reservations?.filter(
    (result) => result.reservation?.state! === false
  );
  const paidRows = paidReservations?.map((result) => {
    const reservation = result?.reservation!;
    return (
      <ReservationsRow
        {...reservation}
        reservationPrice={reservation?.reservationPrice.toString()}
        serviceName={result?.serviceName || ""}
        userName={result?.userName || ""}
        key={reservation?.reservationId}
      />
    );
  });
  const rows = unPaidReservations?.map((result) => {
    const reservation = result?.reservation!;
    return (
      <ReservationsRow
        {...reservation}
        reservationPrice={reservation?.reservationPrice.toString()}
        serviceName={result?.serviceName || ""}
        userName={result?.userName || ""}
        key={reservation?.reservationId}
      />
    );
  });

  return (
    <LayoutPage nameSportCenter={status.data?.getSportCenter?.name || ""}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h2 className="text-xl font-bold">Por Pagar</h2>
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
            data={rows!}
          />
          <h2 className="text-xl font-bold">Pagadas</h2>
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
      )}
    </LayoutPage>
  );
};
export default ReservationsPage;
