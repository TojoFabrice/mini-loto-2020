
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { images } from '../../../styles/Image';
import Resultat from '../Resultat';

const LotteryDrawResult = () => {
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={images.lotteryDraw.backgroundRST}
            resizeMode="cover"
        >

            <Resultat />


        </ImageBackground>
    )
}

export default LotteryDrawResult;