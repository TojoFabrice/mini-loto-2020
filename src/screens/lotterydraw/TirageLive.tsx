import React from "react";
import { View, Text, Platform, Image, ImageBackground, YellowBox, TouchableOpacity } from "react-native";
import BackgroundTime from "../../components/BackgroundTime";
import { Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { images } from "../../styles/Image";
import TirageLiveStyle from "./TirageLiveStyle";
import { Colors } from "../../styles/Colors";

export default function TirageLive() {
    const { navigate, goBack } = useNavigation();
    return (


            <View>
                <View style={TirageLiveStyle.headerMode}>
                    <TouchableOpacity onPress={goBack} style={TirageLiveStyle.headerModeIcon}>
                        <Icon name="arrow-back" color={Colors.white} />
                    </TouchableOpacity>
                    <Text style={TirageLiveStyle.headerModeTitle}>
                        Le tirage
                </Text>
                </View>
                <View style={TirageLiveStyle.container}>

                    <View style={TirageLiveStyle.textContainer}>


                        <Text style={{ ...TirageLiveStyle.text, ...TirageLiveStyle.title }}>
                            Tirage N° 34
                    </Text>

                        <Text style={{ ...TirageLiveStyle.text }}>
                            du Lundi 23/06/2020 à 10:30
                    </Text>

                        <Text style={{ ...TirageLiveStyle.text, ...TirageLiveStyle.title }}>
                            Prochaine tirage dans
                    </Text>
                    </View>


                </View>


                <View style={TirageLiveStyle.timeContainer}>
                    <View style={{ paddingTop: 15, paddingLeft: 10 }}>
                        <BackgroundTime />
                    </View>
                </View>

                <View style={TirageLiveStyle.loto}>
                    <Image
                        source={images.lotteryDraw.boole}
                        style={TirageLiveStyle.container}
                    />

                </View>
            </View>
      

    )
}

