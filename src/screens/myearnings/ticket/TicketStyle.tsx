import React from "react";
import { StyleSheet} from 'react-native';

import {fonts} from "../../../styles/fonts";
import {Colors, paddingHorizWidth, spaceWidth} from "../../../styles";

const TicketStyles = StyleSheet.create({
    container: {
        margin: spaceWidth,
        backgroundColor: Colors.white,
        // paddingBottom: 30,
        borderRadius: 20,
    },
    headerStyle:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 15,
        paddingLeft: 15,
        backgroundColor: Colors.greyTrans,
        marginBottom: 15,
        ...paddingHorizWidth,
        paddingBottom: 8,
    },
    bigTitle: {
        fontSize: 17,
        fontFamily: fonts.poppins.SemiBold,
        color: Colors.blueLight,
    },
    normalText:{
        color: Colors.blueDark,
        fontFamily: fonts.poppins.regular,
    },
    earningDesc:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 15,
        paddingLeft: 15,
    },
    descTitle:{
        fontSize: 17,
        color: Colors.blueLight,
        fontFamily: fonts.poppins.SemiBold,
        marginRight: 90,
    },
    drawDesc:{
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        color: Colors.blueDark,
        paddingLeft: "auto",
    },
    drawText:{
        flex:1,
        flexDirection:"column"
    },
    earningPrice:{
        fontSize: 20,
        fontFamily: fonts.poppins.SemiBold,
        color: Colors.blueDark,
        textAlign: "center",
    },
    ticket:{
        paddingTop: 20,
        paddingHorizontal: 15
    },
    button: {
        alignSelf: "flex-start",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: 45,
        height: 55,
        borderRadius: 25,
    },
    buttonNone: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: Colors.white,
    },
    buttonText: {
        color: Colors.blueLight,
        textAlign: "center",
        fontFamily: fonts.poppins.SemiBold,
        top: -5,
    },
    buttonSelected: {
        backgroundColor: Colors.blueDark,
    },
    buttonTextSelected: {
        color: Colors.white,
    },
    text: {
        color: Colors.white,
        fontFamily: fonts.poppins.regular,
    },
});

export default TicketStyles;
