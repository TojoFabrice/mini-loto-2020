import React from "react";
import {ImageBackground, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import { Icon } from 'react-native-elements';

import Ticket from "./ticket/Ticket";
import {images} from "../../styles/Image";
import styles from "./MyEarningsStyle";
import { Colors } from '../../styles';
import { useNavigation } from "@react-navigation/native";

export default function myEarnings() {
    const circle = Platform.OS !== "web" && Platform.OS === "ios" ? 345 : 305;
    const bubble = Platform.OS !== "web" && Platform.OS === "ios" ? 260 : 200;
    const light = Platform.OS !== "web" && Platform.OS === "ios" ? 245 : 200;
    const navigate = useNavigation();
    const ticketDraw = [1,2,3,4];
    return (
        <ImageBackground
            style={{flex: 1}}
            resizeMode={"stretch"}
            source={images.auth.background}
        >
            <ImageBackground
                style={{flex: 1, height: circle}}
                source={images.auth.circle}
            >
                <ImageBackground
                    style={{flex: 1, height: bubble}}
                    source={images.auth.bubble}
                >
                    <ImageBackground
                        style={{flex: 1, height: light}}
                        source={images.auth.light}
                    >
                        <SafeAreaView style={styles.innercontainer}>
                            <ScrollView>
                                <View style={styles.headerMode}>
                                    <TouchableOpacity onPress={() => navigate.goBack()} style={styles.headerModeIcon}>
                                        <Icon name="arrow-back" color={Colors.white} />
                                    </TouchableOpacity>
                                    <Text style={styles.headerModeTitle}>
                                        Mes gains
                                    </Text>
                                </View>
                                {ticketDraw.map((ticket, index)=>(
                                    <Ticket key={index}/>
                                ))}
                            </ScrollView>
                        </SafeAreaView>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground>
        </ImageBackground>
    )
}
