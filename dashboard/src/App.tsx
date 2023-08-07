import React from "react";
import "./App.css";
import { useAllUSersQuery } from "schema";
function App() {
  const { data, loading, error } = useAllUSersQuery();
  if (loading) return <span> Loading</span>;
  if (error) return <span> Error</span>;
  return (
    <div className="App">
      RESERVAS TASTAS
      <div>
        {data?.allUsers?.map((user) => {
          return JSON.stringify(user);
        })}
      </div>
    </div>
  );
}

export default App;
