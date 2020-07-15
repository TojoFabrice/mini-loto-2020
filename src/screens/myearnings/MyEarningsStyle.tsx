import { StyleSheet } from 'react-native';
import {Colors} from "../../styles";
import {fonts} from "../../styles/fonts";
const MyEarningsStyles = StyleSheet.create({
    innercontainer: {
        flex: 1,
        justifyContent: "space-between",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerMode: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 40,
        marginTop: 60,
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
        marginLeft: 20
    },
    headerModeTitle: {
        fontFamily: fonts.poppins.bold,
        fontSize: 18,
        color: Colors.yellow,
        alignItems: "center",
        marginRight: 140
    },
    contenair: {
        backgroundColor: Colors.white,
        width: 318,
        height: 380,
        marginTop: 30,
        marginLeft: 20,
        borderRadius: 20,
        // alignItems:"center",
    },
    content: {
        flexDirection: "row",
    },
    boule: {
        marginLeft: 30,
        marginTop: 15
    },
    text: {
        color: Colors.blueTab,
        fontFamily: fonts.poppins.regular,
    },
    title: {
        fontSize: 16,
        // marginBottom: 3,
        fontFamily: fonts.poppins.bold,
    },
    textContainer: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 10
    },
});

export default MyEarningsStyles;
