import { StyleSheet } from "react-native";
import { Colors } from "../../styles";
import { fonts } from "../../styles/fonts";

export default StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  inputCheckbox: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  iconRight: {
    marginLeft: 5,
  },
  input: {
    flex: 1,
    fontFamily: fonts.poppins.regular,
  },
  inputerror: {
    borderColor: Colors.red,
  },
  errorcontainer: {
    marginBottom: 10,
  },
  error: {
    color: Colors.red,
    fontFamily: fonts.poppins.regular,
  },
  text: {
    fontFamily: fonts.poppins.regular,
  },
});
