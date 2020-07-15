import { StyleSheet } from 'react-native';
import { Colors } from "../../styles/Colors"
import { fonts } from "../../styles/fonts"

const styles = StyleSheet.create({
    piker: {
        marginTop: 12
    },
    contenair: {
        backgroundColor: Colors.white,
        width: '85%', 
        height: 380,
        marginTop: 30,
        marginLeft: 0,
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    content: {
        flexDirection: "row",
    },
    boule: {
        marginLeft: 30,
        marginTop: 15,
        width: "100%",
        height: "50%"
    },
    headerMode: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
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
        alignItems: "center",
        marginRight: 140
    },
    text: {
        color: Colors.blueTab,
        fontFamily: fonts.poppins.regular,
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.poppins.bold,
    },
    textContainer: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 10
    },
})

export default styles;