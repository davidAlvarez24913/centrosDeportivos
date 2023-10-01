import React from "react";
import "./App.css";
import { client } from "schema";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReservationsPage from "./pages/Reservations";
import ServicesPage from "./pages/Services";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import { UserContextProvider } from "./context/UserContext";
import { ProtectedRoute } from "./components/atomos";
import Register from "./pages/Register";

function App() {
  return (
    <UserContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<ReservationsPage />} />
              <Route index path="/" element={<ReservationsPage />} />
              <Route path="/perfil" element={<ProfilePage />} />
              <Route path="/servicios" element={<ServicesPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </UserContextProvider>
  );
}

export default App;
