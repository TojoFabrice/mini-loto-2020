import React, { useState } from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";
import { SocialIcon } from "react-native-elements";

import styles from "./AuthStyle";
import Tab from "../../components/tab/Tab";
import LoginForm from "./login/LoginForm";
import RegisterForm from "./register/RegisterForm";
import Logo from "../../components/logo/Logo";
import { images } from "../../styles/Image";

export default function Auth() {
  const [marginTop, setMarginTop] = useState(0);
  const loading = useSelector((state: any) => state.Account.loading);
  const circle = Platform.OS !== "web" && Platform.OS === "ios" ? 345 : 305;
  const bubble = Platform.OS !== "web" && Platform.OS === "ios" ? 260 : 200;
  const light = Platform.OS !== "web" && Platform.OS === "ios" ? 245 : 200;

  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode={"stretch"}
      source={images.auth.background}
    >
      <ImageBackground
        style={{ flex: 1, height: circle }}
        source={images.auth.circle}
      >
        <ImageBackground
          style={{ flex: 1, height: bubble }}
          source={images.auth.bubble}
        >
          <ImageBackground
            style={{ flex: 1, height: light }}
            source={images.auth.light}
          >
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.innercontainer}>
              <ScrollView>
                <View style={styles.logo}>
                  <Logo />
                </View>
                <View>
                  <Tab
                    defaultValue={2}
                    tabs={[{ text: "Inscription" }, { text: "Connexion" }]}
                    blockTab={loading}
                    marginTop={marginTop}
                    onSwitchTab={(current, id) => {
                      if (current === 0 && id === 1) setMarginTop(-40);
                      if (current === 1 && id === 0) setMarginTop(0);
                    }}
                  >
                    <RegisterForm />
                    <LoginForm />
                  </Tab>
                </View>
                <View style={styles.socialnetworks}>
                  <SocialIcon
                    style={styles.socialIcon}
                    type="google"
                    light={true}
                  />
                  <SocialIcon
                    style={styles.socialIcon}
                    type="facebook"
                    light={true}
                  />
                  <SocialIcon
                    style={styles.socialIcon}
                    type="twitter"
                    light={true}
                  />
                </View>
              </ScrollView>
            </SafeAreaView>
          </ImageBackground>
        </ImageBackground>
      </ImageBackground>
    </ImageBackground>
  );
}
