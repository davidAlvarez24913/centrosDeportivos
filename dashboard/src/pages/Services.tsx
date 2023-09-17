import React from "react";
import { CardService, LayoutPage } from "../components/moleculas";
import { CreateServiceButton } from "../components/organismos";
import { Service, useListServicesBySportCenterIdQuery } from "schema";

const ServicesPage = () => {
  const { data } = useListServicesBySportCenterIdQuery({
    variables: { sportCenterId: "here sport center id" },
  });
  const services = data?.listServicesBySportCenterId;
  const servicess = [
    {
      serviceId: "1",
      name: "Cancha la chancha",
      sport: "Voley",
      description: " descripcion mamalona",
      image: "/image 9.png",
      disponibility: {},
    },
    {
      serviceId: "1",
      name: "Cancha la chancha",
      sport: "Voley",
      description: " descripcion mamalona",
      image: "/image 9.png",
      disponibility: {},
    },
  ];
  return (
    <LayoutPage nameSportCenter="">
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <CreateServiceButton />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  mt-5">
          {/* {services?.map((service) => {
            const { __typename, ...auxService } = service as Service;
            return <CardService service={auxService} />;
          })} */}
          {servicess?.map((service, index) => {
            const { __typename, ...auxService } = service as Service;
            return <CardService service={auxService} key={index} />;
          })}
        </div>
      </div>
    </LayoutPage>
  );
};
export default ServicesPage;
