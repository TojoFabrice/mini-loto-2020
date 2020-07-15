import Config from "react-native-config";

export const CONSTANT = {
  API: {
    HOST: Config.API_HOST || "http://miniloto-web.bloom-code.fr/api",
  },
  NODE_ENV: Config.NODE_ENV || "developpement",
};
