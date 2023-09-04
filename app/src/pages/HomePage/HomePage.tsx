import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import React from "react";
import { Background, CustomButton } from "src/components/atomos";
import { MenuCard } from "src/components/moleculas";

const HomePage = () => {
  const ionRouter = useIonRouter();
  const loggedIn = true;
  return (
    <IonPage>
      <IonContent>
        <Background>
          <div className="flex flex-col gap-5 mt-4 justify-center">
            <img
              src="assets/Title.svg"
              alt="reservas tas tas logo"
              className="w-32 m-auto"
            />
            <div className="flex flex-col gap-2">
              <MenuCard
                title="Deportes"
                description="Reserva según el deporte que prefieras"
                iconPath="assets/icon/Futbol.svg"
                onClick={() => {
                  ionRouter.push("/sports");
                }}
              ></MenuCard>
              <MenuCard
                title="Centro Deportivo"
                description="Reserva según tu centro deportivo favorito"
                iconPath="assets/icon/round-place.svg"
                onClick={() => {
                  ionRouter.push("/sportsCenters");
                }}
              ></MenuCard>
              {loggedIn ? (
                <>
                  <MenuCard
                    title="Reservaciones"
                    description="Mira tus reservaciones"
                    iconPath="assets/icon/register-book.svg"
                    onClick={() => {
                      ionRouter.push("/myreservations");
                    }}
                  ></MenuCard>
                  <MenuCard
                    title="Perfil"
                    description="Informacion personal"
                    iconPath="assets/icon/profile.svg"
                    onClick={() => {
                      ionRouter.push("/profile");
                    }}
                  ></MenuCard>
                  <CustomButton
                    title="Cerrar Sesión"
                    onClick={() => {
                      console.log("logout");
                    }}
                    color="cancel"
                    type="button"
                  />
                </>
              ) : (
                <CustomButton
                  title="Iniciar Sesión"
                  onClick={() => {
                    ionRouter.push("/login");
                  }}
                  color="sucessfull"
                  type="button"
                />
              )}
            </div>
          </div>
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
