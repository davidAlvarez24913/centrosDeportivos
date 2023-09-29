import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useGetUserQuery } from "schema";
import useUser from "src/Hooks/useUser";
import { Background, Header, Loading } from "src/components/atomos";
import { ProfileInfo } from "src/components/moleculas";

const EditProfile = () => {
  const userId = useUser().user?.uid;

  const { data, loading } = useGetUserQuery({
    variables: { userId: userId! },
  });
  const userData = data?.findUser;
  return (
    <IonPage>
      <Header title={"Informacion de Perfil"} path="/" />
      <IonContent>
        <Background>
          {loading ? <Loading /> : <ProfileInfo {...userData!} />}
        </Background>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
