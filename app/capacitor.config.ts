import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "ReservasTasTas",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    androidScheme: "https",
  },
};

export default config;
