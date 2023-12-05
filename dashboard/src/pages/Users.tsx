import { useAllUSersQuery, useIsAdminQuery } from "schema";
import { LayoutPage, Table } from "../components/moleculas";
import { Loading } from "../components/atomos";
import UserRow from "../components/organismos/UsersRow";
import useUser from "../Hooks/useUser";

const UsersPage = () => {
  const userId = useUser().user?.uid;

  const { data, loading, refetch } = useAllUSersQuery();
  const isAdmin = useIsAdminQuery({ variables: { adminId: userId || "" } });

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
      ) : isAdmin?.data?.isAdmin ? (
        <div>
          <h2 className="tex-2xl font-semibold">Funciones de super usuario</h2>
          <Table
            headers={["ID", "Nombre", "Correo Electrónico", "Acceso"]}
            data={userRows!}
          />
        </div>
      ) : (
        <h2>No tiene acceso a estas funciones</h2>
      )}
    </LayoutPage>
  );
};

export default UsersPage;
