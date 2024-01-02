import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect } from "react";
import { useGetUserQuery } from "schema";
import useUser from "src/Hooks/useUser";
import { Background, Header, Loading } from "src/components/atomos";
import { ProfileInfo } from "src/components/moleculas";

const ProfilePage = () => {
  const userId = useUser().user?.uid;

  const { data, loading, refetch } = useGetUserQuery({
    variables: { userId: userId! },
  });
  const userData = data?.findUser;

  useEffect(() => {
    refetch();
  }, []);

  return (
    <IonPage>
      <Header title={"Información de Perfil"} path="/" />
      <IonContent>
        <Background>
          {loading ? <Loading /> : <ProfileInfo {...userData!} />}
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
