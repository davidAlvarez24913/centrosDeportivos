import { dataSource } from "./db/TypeOrm/config";
import { app } from "./db/Firebase/config";
import { apolloServer } from "./app";
import "reflect-metadata";

dataSource
  .initialize()
  .then(() => console.log("Conexión establecida con db SQL"))
  .catch((error) => console.log(error));

apolloServer
  .listen({ host: process.env.IP_ADDRESS_APOLLO_SERVER, port: 4000 })
  .then(({ url }) => {
    console.log(`Server ready alt ${url}graphql`);
  });

console.log(`Conexión con ${app.options.projectId} establecida`);
