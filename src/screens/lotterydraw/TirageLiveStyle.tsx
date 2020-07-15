import { StyleSheet } from 'react-native';
import { Colors } from "../../styles/Colors";
import { fonts } from "../../styles/fonts";

const TirageLiveStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },


    containerBe: {
        flexDirection: "column",

    },

    text: {
        color: Colors.yellow,
        fontFamily: fonts.poppins.regular,
    },

    title: {
        fontSize: 20,
        marginBottom: 3,
        fontFamily: fonts.poppins.bold,
    },

    textContainer: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 10
    },

    timeContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    headerMode: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 20,
    },

    headerModeIcon: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
    },

    headerModeTitle: {
        fontFamily: fonts.poppins.bold,
        fontSize: 18,
        color: Colors.yellow,
        textAlign: "right",
        marginRight: 140,
    },

    loto: {
        alignItems: "center",
        marginTop: -80,
        marginLeft: -20
    }
})


export default TirageLiveStyle;