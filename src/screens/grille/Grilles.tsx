import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { images } from '../../styles/Image';
import { Colors } from '../../styles/Colors';
import { fonts } from '../../styles/fonts';
import { Icon } from 'native-base';
import { Picker } from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { boule } from '../../common/boule';
import styles from './GrilleStyle'

export default function Grilles({ navigation: { navigate } }: any) {
    const [selectedValue, setSelectedValue] = useState("exemple1");
    return (
        <ImageBackground
            style={{ flex: 1, paddingTop: 50 }}
            source={images.lotteryDraw.backgroundRST}
        >
            <View style={styles.headerMode}>
                <TouchableOpacity onPress={() => navigate.goBack()} style={styles.headerModeIcon}>
                    <Icon name="arrow-back" color={Colors.white} />
                </TouchableOpacity>
                <Text style={styles.headerModeTitle}>
                    Mes grilles
                </Text>
            </View>
            <View style={styles.piker}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 20, width: 150, color: Colors.white, marginLeft: 16 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="exemple1" value="java" />
                    <Picker.Item label="exemple2" value="js" />
                </Picker>
            </View>
            <ScrollView>
                <View style={styles.contenair}>
                    <View style={styles.content}>
                        <View style={styles.textContainer}>
                            <Text style={{ ...styles.text, ...styles.title }}>
                                Tirage N° 35
                            </Text>
                            <Text style={{ ...styles.text }}>
                                4 Grilles jouets
                            </Text>
                        </View>
                        <View style={{ marginTop: 13, marginRight: 15 }}>
                            <Text style={{ ...styles.text }}>
                                26/06/2020 | à 10:35
                            </Text>
                            <Text style={{ color: Colors.yellow }}>
                                Résultat dans 5min
                            </Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View>
                            {boule.map((boul, j) => {
                                // const index = boul.id;
                                // const img = boul.img;
                                return (

                                    <View style={{
                                        height: '20%',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        width: '100%',
                                        backgroundColor: Colors.greyTrans,

                                    }}>
                                        <View style={{
                                            width: '10%',
                                            height: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: Colors.darkBlue,
                                        }}>
                                            <Text>{boul.id}</Text>
                                        </View>
                                        <View style={{
                                            width: '70%',
                                            height: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            flexDirection: 'column',
                                            marginTop: 14,
                                            marginLeft: 10
                                        }}>

                                            <Image source={images.lotteryDraw.bv}></Image>
                                        </View>
                                    </View>

                                )
                            })}
                        </View>
                    </ScrollView>


                </View>





                <View style={styles.contenair}>
                    <View style={styles.content}>
                        <View style={styles.textContainer}>
                            <Text style={{ ...styles.text, ...styles.title }}>
                                Tirage N° 35
                    </Text>
                            <Text style={{ ...styles.text }}>
                                4 Grilles jouets
                    </Text>
                        </View>
                        <View style={{ marginTop: 13, marginRight: 15 }}>
                            <Text style={{ ...styles.text }}>
                                26/06/2020 | à 10:35
                     </Text>
                            <Text style={{ color: Colors.yellow }}>
                                Résultat dans 5min
                     </Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View>
                            {boule.map((boul, j) => {
                                // const index = boul.id;
                                // const img = boul.img;
                                return (

                                    <View style={{
                                        height: '20%',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        width: '100%',
                                        backgroundColor: Colors.greyTrans,

                                    }}>
                                        <View style={{
                                            width: '10%',
                                            height: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: Colors.darkBlue,
                                        }}>
                                            <Text>{boul.id}</Text>
                                        </View>
                                        <View style={{
                                            width: '70%',
                                            height: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                            flexDirection: 'column',
                                            marginTop: 14,
                                            marginLeft: 10
                                        }}>

                                            <Image source={images.lotteryDraw.bv}></Image>
                                        </View>
                                    </View>

                                )
                            })}
                        </View>
                    </ScrollView>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}








