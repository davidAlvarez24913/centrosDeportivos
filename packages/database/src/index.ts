import { dataSource } from "./db/TypeOrm/config";
import { app } from "./db/Firebase/config";
import { apolloServer } from "./app";
import "reflect-metadata";
// import ip from "ip";

// const ip_local = ip.address();

dataSource
  .initialize()
  .then(() => console.log("Conexión establecida con db SQL"))
  .catch((error) => console.log(error));

apolloServer
  .listen({ host: "64.227.3.57", port: 4000 })
  .then(({ url }) => {
    console.log(`Server ready alt ${url}graphql`);
  });

console.log(`Conexión con ${app.options.projectId} establecida`);
