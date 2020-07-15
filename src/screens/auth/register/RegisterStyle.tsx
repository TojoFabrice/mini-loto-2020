import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";
import { ScreenDimensions } from "../../../styles/Css";

export default StyleSheet.create({
  submit: {
    position: "absolute",
    bottom: -70 - 30,
    alignSelf: "center",
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 66,
  },
  submitIconContainer: {
    backgroundColor: Colors.blueDark,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60 / 2,
  },
  profile: {
    position: "absolute",
    top: -165,
    alignSelf: "center",
    padding: 6,
    borderRadius: 240,
  },
  profilepic: {
    borderWidth: 3,
    borderColor: Colors.blueLight,
    width: ScreenDimensions.widthScreen * 0.2,
    height: ScreenDimensions.widthScreen * 0.2,
    resizeMode: "cover",
  },
  error: {
    backgroundColor: Colors.red,
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  errorText: {
    color: Colors.white,
    fontWeight: "600",
  },
});
