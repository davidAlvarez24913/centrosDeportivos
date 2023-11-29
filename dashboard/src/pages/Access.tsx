import { useGetNameSportCenterQuery, useListSportCentersQuery } from "schema";
import { LayoutPage, Table } from "../components/moleculas";
import { SportCenterRow } from "../components/organismos";
import { Loading } from "../components/atomos";
import useUser from "../Hooks/useUser";

const AccessPage = () => {
  const { user } = useUser();
  const sportCenterId = user?.uid!;
  const status = useGetNameSportCenterQuery({
    variables: { sportCenterId: sportCenterId },
  });
  const { data, loading, refetch } = useListSportCentersQuery();

  const sportsCenterRows = data?.listSportCenters
    ?.filter((sp) => sp.sportCenterId !== sportCenterId)
    .map((sp, index) => {
      return (
        <SportCenterRow
          name={sp.name}
          email={sp.email}
          access={sp.access}
          sportCenterId={sp.sportCenterId}
          key={index}
          index={index + 1}
          refetch={refetch}
        />
      );
    });
  return (
    <LayoutPage nameSportCenter={status.data?.getSportCenter?.name || ""}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h2 className="tex-2xl font-semibold">Funciones de super usuario</h2>
          <Table
            headers={["ID", "Nombre", "Correo Electrónico", "Acceso"]}
            data={sportsCenterRows!}
          />
        </div>
      )}
    </LayoutPage>
  );
};

export default AccessPage;
