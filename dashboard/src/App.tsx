import React from "react";
import "./App.css";
import { client } from "schema";
import { ApolloProvider } from "@apollo/client";
import ReservacionesPage from "./pages/Reservaciones";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiciosPage from "./pages/Servicios";
import PerfilPage from "./pages/Perfil";
import LoginPage from "./pages/Login";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reservaciones" element={<ReservacionesPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
