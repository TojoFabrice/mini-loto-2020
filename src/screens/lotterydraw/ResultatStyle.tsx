import { StyleSheet } from 'react-native';
import { Colors } from "../../styles/Colors";
import { fonts } from "../../styles/fonts";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20
    },


    containerBe: {
        flexDirection: "row",
        marginTop: 115,
        padding: 20,
        flex: 1
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
        // textAlign: "center",
        alignItems: "center",
        marginRight: 140
    },

    buttonText: {
        textAlign: "center",
        width: "100%",
        color: Colors.black,
        fontFamily: fonts.poppins.regular,
    },

    button: {
        backgroundColor: Colors.yellow,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 10,
        paddingTop: 12,
        width: "100%",
        marginBottom: 15,
        borderRadius: 50,
        borderColor: Colors.yellow,
        borderWidth: 1,
    },

    btnPosition: {
        paddingTop: 150
    }

})


export default styles;


