import React from "react";
import { CardService, LayoutPage } from "../components/moleculas";
import { CreateServiceButton } from "../components/organismos";
import { Service, useListServicesBySportCenterIdQuery } from "schema";
import useUser from "../Hooks/useUser";
import { Loading } from "../components/atomos";

const ServicesPage = () => {
  const { user } = useUser();
  const { data, loading, refetch } = useListServicesBySportCenterIdQuery({
    variables: { sportCenterId: user?.uid as string },
  });
  const services = data?.listServicesBySportCenterId;

  return (
    <LayoutPage nameSportCenter="">
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <CreateServiceButton
            onRefetch={() => {
              refetch();
            }}
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  mt-5">
          {loading ? (
            <Loading />
          ) : (
            <>
              {services?.map((service, index) => {
                const { __typename, ...auxService } = service as Service;
                return (
                  <CardService
                    onRefetch={() => {
                      refetch();
                    }}
                    service={auxService}
                    key={index}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </LayoutPage>
  );
};
export default ServicesPage;
