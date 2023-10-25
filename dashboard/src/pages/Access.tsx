import { useListSportCentersQuery } from "schema";
import { LayoutPage, Table } from "../components/moleculas";
import { SportCenterRow } from "../components/organismos";
import { Loading } from "../components/atomos";

const AccessPage = () => {
  const { data, loading, refetch } = useListSportCentersQuery();

  const sportsCenterRows = data?.listSportCenters?.map((sp, index) => {
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
    <LayoutPage nameSportCenter="user">
      <h2 className="tex-2xl font-semibold">Funciones de super usuario</h2>
      {loading ? (
        <Loading />
      ) : (
        <Table
          headers={["ID", "Nombre", "Correo Electrónico", "Acceso"]}
          data={sportsCenterRows!}
        />
      )}
    </LayoutPage>
  );
};

export default AccessPage;
