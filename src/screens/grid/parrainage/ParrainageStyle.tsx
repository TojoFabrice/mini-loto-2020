import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';
import { fonts } from '../../../styles/fonts';

const ParrainageStyles = StyleSheet.create({
    headerMode: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 75,
        marginLeft: 25,
        marginRight: 25
      },
    headerModeIcon: {
        marginLeft: 15,
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
    headerModeTitleContent: {
        flex: 1,
        alignItems: 'center',
    },
    headerModeTitle: {
        fontFamily: fonts.poppins.bold,
        fontSize: 18,
        color: Colors.yellow,
        textAlign: "right",
        marginRight: 40,
    },
    gainContainer: {
        width: "90%",
        height: 150,
        alignSelf: 'center',
    },
});

export default ParrainageStyles;