import { StyleSheet } from "react-native";

export const EventImageStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    alignSelf: "center",
    backgroundColor: "red",
    marginBottom: 30,
  },
  images: {
    width: 275,
    height: "100%",
  },
  imageBlock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  imageText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
