import { useAllUSersQuery } from "schema";
import { LayoutPage, Table } from "../components/moleculas";
import { Loading } from "../components/atomos";
import UserRow from "../components/organismos/UsersRow";

const UsersPage = () => {
  const { data, loading, refetch } = useAllUSersQuery();

  const userRows = data?.allUsers?.map((user, index) => {
    return (
      <UserRow
        name={user?.name!}
        email={user?.email!}
        access={user?.access!}
        userId={user?.userId!}
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
            headers={["ID", "Nombre", "Correo Electrónico", "Acceso"]}
            data={userRows!}
          />
        </div>
      )}
    </LayoutPage>
  );
};

export default UsersPage;
