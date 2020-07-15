import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Asset } from 'expo-asset';
import { images } from '../../styles/Image';
import Header from "../Header";
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../styles/Colors';
import { fonts } from '../../styles/fonts';
import { Icon } from 'native-base';
import styles from './ResultatStyle';


export default function Resultat() {
    const { navigate, goBack } = useNavigation();
    return (
        <View>
            <View style={styles.headerMode}>
                <TouchableOpacity onPress={goBack} style={styles.headerModeIcon}>
                    <Icon name="arrow-back" color={Colors.white} />
                </TouchableOpacity>
                <Text style={styles.headerModeTitle}>
                    Le tirage
                </Text>
            </View>
            <ScrollView>


                <View style={styles.container}>



                    <View style={styles.textContainer}>


                        <Text style={{ ...styles.text, ...styles.title }}>
                            Résultat tirage N° 34
                    </Text>

                        <Text style={{ ...styles.text }}>
                            du Lundi 23/06/2020 à 10:30
                    </Text>

                    </View>


                </View>

                <View style={styles.containerBe}>
                    <Image source={images.lotteryDraw.bv}></Image>
                    <Image source={images.lotteryDraw.bnv}></Image>
                </View>

                <View style={styles.btnPosition}>
                    <View
                        style={
                            styles.button
                        }
                    >
                        <TouchableOpacity onPress={() => navigate("Grid")}>
                            <Text
                                style={
                                    styles.buttonText
                                }
                            >
                                Retour à la grille
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

