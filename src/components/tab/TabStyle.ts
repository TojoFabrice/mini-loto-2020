import { StyleSheet } from "react-native";
import { Colors } from "../../styles";
import { ScreenDimensions } from "../../styles/Css";
import { fonts } from "../../styles/fonts";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingTop: 50,
    paddingBottom: 50,
    width: ScreenDimensions.widthScreen - 45,
    alignSelf: "center",
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  headerSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: fonts.poppins.SemiBold,
    fontSize: 16,
    paddingBottom: 15,
  },
  titleContainer: {
    marginRight: 20,
    top: 2,
    paddingBottom: 10,
    paddingRight: 15,
  },
  titleContainerSpace: { top: 2, paddingBottom: 10 },
  selectedTitleContainer: {
    borderBottomColor: Colors.blueLight,
    borderBottomWidth: 4,
  },
  title: {
    color: Colors.black,
    fontFamily: fonts.poppins.Medium,
  },
  selectedTitle: {
    color: Colors.blueLight,
  },
});
