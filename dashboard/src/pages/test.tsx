import React from "react";
import { useAllUSersQuery } from "schema";
const TestPage = () => {
  const { data } = useAllUSersQuery();
  console.log(data);
  return (
    <>
      {data?.allUsers?.map((user, index) => (
        <p key={index}>{user?.email}</p>
      ))}
    </>
  );
};
export default TestPage;
