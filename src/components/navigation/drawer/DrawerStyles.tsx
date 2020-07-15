import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";
import { ScreenDimensions } from "../../../styles/Css";

const DrawerStyles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: ScreenDimensions.widthScreen,
    padding: 25,
  },
  profilepic: {
    borderWidth: 3,
    borderColor: Colors.blueLight,
    width: ScreenDimensions.widthScreen * 0.2,
    height: ScreenDimensions.widthScreen * 0.2,
    resizeMode: "cover",
    marginRight: 10,
  },
  logout: {
    fontSize: 15,
    textDecorationLine: "underline",
    color: Colors.grey1,
  },
  menuContainer: {
    marginTop: 25,
  },
  menu: {
    borderLeftWidth: 5,
    borderBottomColor: "#0020a7",
    borderBottomWidth: 1,
    marginBottom: 1,
  },
  menuFirstChild: {
    borderTopWidth: 1,
    borderTopColor: "#0020a7",
  },
  menuLink: {
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "600",
  },
});

export default DrawerStyles;
