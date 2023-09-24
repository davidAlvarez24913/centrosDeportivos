import React from "react";
import { LayoutPage, Profile } from "../components/moleculas";
import { accounts } from "../data";
import {
  AccountSection,
  EditSportCenterButton,
} from "../components/organismos";
import useUser from "../Hooks/useUser";
import {
  UpdateSportCenterInput,
  useGetSportCenterQuery,
  useUpdateSportCenterMutation,
} from "schema";

const ProfilePage = () => {
  const sportCenterId = useUser().user?.uid!;
  const { data, loading, refetch } = useGetSportCenterQuery({
    variables: { sportCenterId: sportCenterId },
  });
  const [updateSportCenterMutation] = useUpdateSportCenterMutation();
  const sportCenter = data?.getSportCenter!;
  const onUpdate = (input: UpdateSportCenterInput) => {
    updateSportCenterMutation({ variables: { input } }).then(() => refetch());
  };
  return loading ? (
    <div></div>
  ) : (
    <LayoutPage nameSportCenter={sportCenter.name}>
      <div className="flex ">
        <div className="w-2/3 flex flex-col ">
          <EditSportCenterButton
            sportCenterId={sportCenterId}
            {...sportCenter}
            updateSportCenter={onUpdate}
          />
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
