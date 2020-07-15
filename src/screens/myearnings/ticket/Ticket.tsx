import React from "react";
import {ImageBackground, Text, View} from "react-native";

import styles from './TicketStyle';
import {Colors} from "../../../styles";
import Divider from "../../../components/Divider";
import {Divider as ReactDivider} from "react-native-elements";
import {images} from "../../../styles/Image";
export default function Ticket() {
    return(
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Text style={styles.bigTitle}>Ticket n° 131</Text>
                <Divider
                    before={
                        <Text
                            style={styles.normalText}
                            children={"28/06/2020"}
                        />
                    }
                    after={
                        <Text
                            style={styles.normalText}
                            children={`à 10h22`}
                        />
                    }
                    color={Colors.grey}
                />
            </View>
            <View style={styles.earningDesc}>
                <View>
                    <Text style={styles.descTitle}>Votre tirage</Text>
                </View>
                <View style={styles.drawDesc}>
                    <View>
                        <ImageBackground style={{width:24, height:24}} source={images.yellowplus}/>
                    </View>
                    <View style={styles.drawText}>
                        <Text>4 bon numéro</Text>
                        <Text>1 Fétiche</Text>
                    </View>
                </View>
            </View>
            <View style={styles.ticket}>
                <ShowTirage selected={[1,2,3,4,5,6]}/>
            </View>
            <ReactDivider/>
            <View>
                <Text style={styles.earningPrice}>€ 3.2510</Text>
            </View>
        </View>
    )
}


interface ShowTirageProps {
    selected: number[];
}

export function ShowTirage({ selected }: ShowTirageProps) {
    return (
        <View style={{ flexDirection: "row" }}>
            {selected.map((key, k) => (
                <View style={{ width: "17%", marginBottom: 20 }} key={k}>
                    {key === 0 ? (
                        <View style={{ ...styles.button, ...styles.buttonNone }}>
                            <Text style={{ ...styles.text, ...styles.buttonText }}>
                                {key > 0 && key}
                            </Text>
                        </View>
                    ) : (
                        <ImageBackground
                            style={{ flex: 1, ...styles.button }}
                            source={images.bouleUnderline}
                        >
                            <Text style={{ ...styles.text, ...styles.buttonText }}>
                                {key > 0 && key}
                            </Text>
                        </ImageBackground>
                    )}
                </View>
            ))}
        </View>
    );
}

