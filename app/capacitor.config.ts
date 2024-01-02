import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.reservas.start",
  appName: "ReservasTasTas",
  webDir: "build",
  server: {
    androidScheme: "http",
    cleartext: true,
  },
};

export default config;
