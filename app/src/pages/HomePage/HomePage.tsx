import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import React from "react";
import { useGetUserQuery } from "schema";
import useUser from "src/Hooks/useUser";
import { Background, CustomButton } from "src/components/atomos";
import { MenuCard } from "src/components/moleculas";

const HomePage = () => {
  const user = useUser();

  const ionRouter = useIonRouter();
  const { data } = useGetUserQuery({
    variables: { userId: user?.user?.uid || "" },
  });
  const loggedIn = user.user ? true : false;
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
              <h2 className="font-bold text-xl text-center p-3">
                Bienvendio {data?.findUser?.name}
              </h2>
              <MenuCard
                title="Deportes"
                description="Reserva según el deporte que prefieras"
                iconPath="assets/icon/Futbol.svg"
                onClick={() => {
                  ionRouter.push("/sports");
                }}
              ></MenuCard>
              <MenuCard
                title="Centros Deportivos"
                description="Reserva según tu centro deportivo favorito"
                iconPath="assets/icon/stadium.svg"
                onClick={() => {
                  ionRouter.push("/sportsCenters");
                }}
              ></MenuCard>
              {loggedIn ? (
                <>
                  <MenuCard
                    title="Mis Reservaciones"
                    description="Observa tus reservaciones"
                    iconPath="assets/icon/register-book.svg"
                    onClick={() => {
                      ionRouter.push("/myreservations");
                    }}
                  ></MenuCard>
                  <MenuCard
                    title="Mis Reseñas"
                    description="Observa tus reseñas"
                    iconPath="assets/icon/reviews.svg"
                    onClick={() => {
                      ionRouter.push("/myreviews");
                    }}
                  ></MenuCard>
                  <MenuCard
                    title="Perfil"
                    description="Información personal"
                    iconPath="assets/icon/profile.svg"
                    onClick={() => {
                      ionRouter.push("/profile");
                    }}
                  ></MenuCard>
                  <CustomButton
                    title="Cerrar Sesión"
                    onClick={() => {
                      user.handleSignOut();
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
