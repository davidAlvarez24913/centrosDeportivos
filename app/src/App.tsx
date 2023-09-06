import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
/* Theme variables */
import "./theme/variables.css";
import "./theme/ionicOverwrites.css";
import { client } from "schema";
import { ApolloProvider } from "@apollo/client";
import HomePage from "./pages/HomePage";
import SportsPage from "./pages/SportsPage";
import ServicesPage from "./pages/ServicesPage";
import MyReservationsPage from "./pages/MyReservationsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import InfoBookingsPage from "./pages/InfoBookingsPage";
import PaymentPage from "./pages/PaymentPage";
import SportsCentersPage from "./pages/SportsCentersPage";
import SportCenterPage from "./pages/SportCenterPage";
import DisponibilityPage from "./pages/DisponibilityPage";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <ApolloProvider client={client}>
          <Route exact path="/">
            <Redirect to="home" />
          </Route>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/sports" component={SportsPage} />
          <Route exact path="/services/:sport" component={ServicesPage} />
          <Route exact path="/sportsCenters" component={SportsCentersPage} />
          <Route
            exact
            path="/sportCenter/:sportCenterId"
            component={SportCenterPage}
          />
          <Route exact path="/myreservations" component={MyReservationsPage} />
          <Route exact path="/payment/:info" component={PaymentPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/info-bookings" component={InfoBookingsPage} />
          <Route
            exact
            path="/disponibility/:serviceId"
            component={DisponibilityPage}
          />
        </ApolloProvider>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
