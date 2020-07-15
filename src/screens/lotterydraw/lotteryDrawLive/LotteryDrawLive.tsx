import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Asset } from 'expo-asset';
import { images } from '../../../styles/Image';
import MiniLottoBackground from '../../../components/miniLottoBackground';
import Header from "../../Header";
import TirageLive from '../TirageLive';
import { useNavigation } from '@react-navigation/native';

const LotteryDrawLive = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const { navigate, goBack } = useNavigation();
    return (

        <ImageBackground
            style={{ flex: 1 }}
            source={images.lotteryDraw.background}
            resizeMode="cover"
        >

            <TirageLive />


        </ImageBackground>

    )
}

export default LotteryDrawLive;