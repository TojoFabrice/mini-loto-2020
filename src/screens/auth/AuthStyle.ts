import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

export default StyleSheet.create({
  innercontainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  logo: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 70,
  },
  logoImg: {
    width: 94,
    height: 96,
  },
  socialnetworks: {
    paddingTop: 30,
    paddingBottom: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  socialIcon: {
    width: 45, 
    height: 45,
    backgroundColor: Colors.white,
    borderWidth: 3,
    borderColor: Colors.blueLight,
  }
});
