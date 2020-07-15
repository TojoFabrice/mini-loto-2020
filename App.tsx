import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";

import store from "./src/store";
import Routes from "./src/routes/Routes";
import { fontAssets } from "./src/styles/fonts";
import Logo from "./src/components/logo/Logo";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => { Promise.all(fontAssets).then(() => setFontsLoaded(true)); }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Logo />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
