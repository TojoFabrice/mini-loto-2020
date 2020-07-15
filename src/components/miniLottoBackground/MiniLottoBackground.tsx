import React from "react";
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";

import { images } from "../../styles/Image";
import { Colors } from "../../styles";

const MiniLottoBackground = ({ children, style = {}, image = null }: any) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={image ?? images.auth.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{
          backgroundColor: image === null ? Colors.blueDark : undefined,
          ...style,
        }}
      >
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MiniLottoBackground;
