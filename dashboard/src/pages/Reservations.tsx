import React from "react";
import { LayoutPage, Table } from "../components/moleculas";
import { ReservationsRow } from "../components/organismos";
import useUser from "../Hooks/useUser";
import { useGetNameSportCenterQuery, useListReservationsQuery } from "schema";

const ReservationsPage = () => {
  const { user } = useUser();
  const status = useGetNameSportCenterQuery({
    variables: { sportCenterId: user?.uid as string },
  });
  const { data, loading } = useListReservationsQuery();
  console.log(data?.allReservations);

  const rows = data?.allReservations?.map((reservation) => (
    <ReservationsRow
      {...reservation!}
      serviceName={reservation.serviceId}
      key={reservation.reservationId}
    />
  ));
  return (
    <LayoutPage nameSportCenter={status.data?.getSportCenter?.name || ""}>
      <div>
        <h2 className="text-xl font-bold">Por Pagar</h2>
        <Table
          headers={["ID", "servicios", "horario", "precio", "ver mas"]}
          data={rows}
        />
        <h2 className="text-xl font-bold">Pagadas</h2>
        <Table
          headers={["ID", "servicios", "horario", "precio", "ver mas"]}
          data={rows}
        />
      </div>
    </LayoutPage>
  );
};
export default ReservationsPage;
