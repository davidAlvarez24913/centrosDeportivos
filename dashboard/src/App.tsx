import React, { useEffect, useState } from "react";
import "./App.css";
import { client } from "schema";
import { ApolloProvider } from "@apollo/client";
import ReservacionesPage from "./pages/Reservaciones";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ServiciosPage from "./pages/Servicios";
import PerfilPage from "./pages/Perfil";
import LoginPage from "./pages/Login";
import { onAuthStateChanged, User } from "@firebase/auth";
import { auth } from "./components/Firebase";

function App() {
  const [user, setUser] = useState<User>();

  console.log("usercontext APP", user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(undefined);
      }
    });
    console.log("provider", user, typeof user);

    return () => {
      // Desinscribirse de la detección de cambios en la autenticación al desmontar el componente
      unsubscribe();
    };
  }, []);

  // const pathsToRedirectFrom = ["/", "/reservaciones", "/perfil", "/servicios"];
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          {user !== undefined ? (
            <>
              <Route path="/login" element={<Navigate to="/reservaciones" />} />
              <Route path="/reservaciones" element={<ReservacionesPage />} />
              <Route path="/servicios" element={<ServiciosPage />} />
              <Route path="/perfil" element={<PerfilPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/login" />} />;
              <Route path="/login" element={<LoginPage setUser={setUser} />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
