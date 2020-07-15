import { Colors } from "./Colors";
import { ViewStyle } from "react-native";

const spaceWidth = 20;

const paddingWidth: ViewStyle = {
  paddingLeft: spaceWidth,
  paddingRight: spaceWidth,
  paddingBottom: 15,
  paddingTop: 15,
};

const paddingHorizWidth: ViewStyle = {
  paddingLeft: spaceWidth,
  paddingRight: spaceWidth,
};

export { Colors, paddingWidth, paddingHorizWidth, spaceWidth };
