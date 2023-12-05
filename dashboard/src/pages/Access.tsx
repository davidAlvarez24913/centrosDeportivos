import { useListSportCentersQuery } from "schema";
import { LayoutPage, Table } from "../components/moleculas";
import { SportCenterRow } from "../components/organismos";
import { Loading } from "../components/atomos";

const Access = () => {
  const { data, loading, refetch } = useListSportCentersQuery();

  const sportsCenterRows = data?.listSportCenters?.map((sp, index) => {
    return (
      <SportCenterRow
        name={sp.name}
        email={sp.email}
        access={sp.access}
        isSuscribed={sp.isSuscribed}
        sportCenterId={sp.sportCenterId}
        key={index}
        index={index + 1}
        refetch={refetch}
      />
    );
  });
  return (
    <LayoutPage nameSportCenter={"Admin"}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h2 className="tex-2xl font-semibold">Funciones de super usuario</h2>
          <Table
            headers={[
              "ID",
              "Nombre",
              "Correo Electrónico",
              "Acceso",
              "Suscrición",
            ]}
            data={sportsCenterRows!}
          />
        </div>
      )}
    </LayoutPage>
  );
};

export default Access;
