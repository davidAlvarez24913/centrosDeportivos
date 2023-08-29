import React from "react";
import "./App.css";
import { client } from "schema";
import { ApolloProvider } from "@apollo/client";
import TestPage from "./pages/test";
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App text-3xl font-bold text-red-600 underline ">
        RESERVAS TASTAS
        <div>
          Test Dashboard
          <TestPage />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
