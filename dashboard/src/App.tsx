import React from "react";
import "./App.css";
import { client } from "schema";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReservationsPage from "./pages/Reservations";
import ServicesPage from "./pages/Services";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reservaciones" element={<ReservationsPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/perfil" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
