import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "ReservasTasTas",
  webDir: "build",
  server: {
    androidScheme: "https",
    allowNavigation: ["http://64.227.3.57:4000/graphql"],
  },
};

export default config;
