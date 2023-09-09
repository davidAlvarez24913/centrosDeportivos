import React from "react";
import { useAllUSersQuery } from "schema";
import Navbar from "../components/moleculas";
const ReservacionesPage = () => {
  const { data } = useAllUSersQuery();
  console.log(data);
  return (
    <>
      {data?.allUsers?.map((user, index) => (
        <p key={index}>{user?.email}</p>
      ))}
      <Navbar nameSportCenter="La Pampita" />
    </>
  );
};
export default ReservacionesPage;
