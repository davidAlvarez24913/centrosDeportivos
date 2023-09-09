import React from "react";
import { Navbar, Table } from "../components/moleculas";
import { ReservationsRow } from "../components/organismos";

const ReservationsPage = () => {
  const data = [
    {
      reservationId: "001",
      serviceName: "La Pampita",
      schedule: "10:00 - 11:00",
      price: "20.00",
      state: true,
      date: "Miércoles 9 Ago. 2023",
      paymetId: "100001001100",
    },
    {
      reservationId: "001",
      serviceName: "La Pampita",
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
    <div className="flex flex-row gap-20">
      <Navbar nameSportCenter="La Pampita" />
      <div className="flex flex-col w-2/3 mt-20 px-4">
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
    </div>
  );
};
export default ReservationsPage;
