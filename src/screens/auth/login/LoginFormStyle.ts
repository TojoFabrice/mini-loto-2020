import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";

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
