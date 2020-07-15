import React from "react";
import { Image } from "react-native";
import { images } from "../../styles/Image";

const Logo = () => {
  const width = 94;
  const height = 96;

  return (
    <Image
      style={{ width, height }}
      borderRadius={width * height}
      source={images.logoFinal}
    />
  );
};

export default Logo;
