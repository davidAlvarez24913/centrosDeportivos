import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { client } from "schema";
import { ApolloProvider } from "@apollo/client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import ReservationsPage from "./pages/Reservations";
import ServicesPage from "./pages/Services";
import ProfilePage from "./pages/Profile";
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

  const pathsToRedirectFrom = ["/", "/reservaciones", "/perfil", "/servicios"];
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          {user !== undefined ? (
            <>
              <Route
                path="/login"
                element={<Navigate to="/reservaciones" replace />}
              />
              <Route path="/reservaciones" element={<ReservationsPage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/perfil" element={<ProfilePage />} />
            </>
          ) : (
            <>
              {pathsToRedirectFrom.map((path) => {
                return (
                  <Route
                    path={path}
                    element={<Navigate to="/login" replace />}
                  />
                );
              })}

              <Route path="/login" element={<LoginPage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
