import { dataSource } from "./db/config";
import { apolloServer } from "./app";
import "reflect-metadata";

dataSource
  .initialize()
  .then(() => console.log("Conexión establecida con db SQL"))
  .catch((error) => console.log(error));
apolloServer.listen().then(({ url }) => {
  console.log(`Server ready alt ${url}`);
});
