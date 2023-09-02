import { dataSource } from "./db/config";
import { apolloServer } from "./app";
import "reflect-metadata";
import ip from "ip";

const ip_local = ip.address();

dataSource
  .initialize()
  .then(() => console.log("Conexión establecida con db SQL"))
  .catch((error) => console.log(error));

apolloServer
  .listen({ url: `http:// ${ip_local}/graphql`, port: 4000 })
  .then(({ url }) => {
    console.log(`Server ready alt ${url}graphql`);
  });
