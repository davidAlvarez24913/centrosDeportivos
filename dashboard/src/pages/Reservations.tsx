import React from "react";
import { LayoutPage, Table } from "../components/moleculas";
import { ReservationsRow } from "../components/organismos";

const ReservationsPage = () => {
  const data = [
    {
      reservationId: "001",
      serviceName: "Cancha 1",
      schedule: "10:00 - 11:00",
      price: "20.00",
      state: true,
      date: "Miércoles 9 Ago. 2023",
      paymetId: "100001001100",
    },
    {
      reservationId: "001",
      serviceName: "Cancha 2",
      schedule: "10:00 - 11:00",
      price: "20.00",
      state: false,
      date: "Miércoles 9 Ago. 2023",
      paymetId: "100001001100",
    },
  ];
  const rows = data.map((reservation) => (
    <ReservationsRow {...reservation} key={reservation.reservationId} />
  ));
  return (
    <LayoutPage nameSportCenter="">
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
