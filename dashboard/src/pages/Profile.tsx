import React, { useEffect, useState } from "react";
import { LayoutPage, Profile } from "../components/moleculas";
import { accounts } from "../data";
import {
  AccountSection,
  EditSportCenterButton,
} from "../components/organismos";
import useUser from "../Hooks/useUser";
import { useGetSportCenterLazyQuery, useGetSportCenterQuery } from "schema";

const ProfilePage = () => {
  const sportCenterId = useUser().user?.uid;
  const { data, loading } = useGetSportCenterQuery({
    variables: { sportCenterId: sportCenterId! },
  });
  const sportCenter = data?.getSportCenter!;

  return loading ? (
    <div></div>
  ) : (
    <LayoutPage nameSportCenter={sportCenter.name}>
      <div className="flex ">
        <div className="w-2/3 flex flex-col ">
          <EditSportCenterButton {...sportCenter} />
          <Profile
            {...sportCenter}
            image={sportCenter.image ? sportCenter.image : ""}
          />
        </div>
        <div className="w-1/3">
          <AccountSection accounts={accounts} />
        </div>
      </div>
    </LayoutPage>
  );
};
export default ProfilePage;
