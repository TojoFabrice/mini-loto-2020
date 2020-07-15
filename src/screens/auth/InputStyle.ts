import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

export default StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.grey1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
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
  },
  inputerror: {
    borderColor: Colors.red,
  },
  errorcontainer: {
    marginBottom: 10,
  },
  error: {
    color: Colors.red,
  },
});
