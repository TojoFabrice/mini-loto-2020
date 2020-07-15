import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '../../../styles';
import { images } from '../../../styles/Image';
import Divider from '../../../components/Divider';
import Header from '../../Header';

const NextLotteryDraw = () => {
    return (
        <ImageBackground 
            style={{flex: 1}}
            resizeMode={'stretch'}
            source={images.auth.background}
        >
            <View style={{
                marginTop: 75,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
                }}
            >
                <View style={{marginLeft: 25}}>
                    <Icon
                        name="arrow-back"
                        type="material"
                        size={30}
                        color={Colors.white}
                        containerStyle={{
                            backgroundColor: "rgba(255, 255, 255, 0.4)",
                            borderRadius: 40 / 2,
                            padding: 5,
                        }}
                    />
                </View>
                <View style={{
                    width: '100%', 
                    alignItems: 'center'
                }}>
                    <Text style={{ 
                        marginRight: 100,
                        color: Colors.yellow,
                        textShadowOffset: { width: 0, height: 0 },
                        textShadowRadius: 1.5,
                        textShadowColor: Colors.whiteShadow,
                        fontSize: 20,
                        fontWeight: "bold",
                    }}>Tirage</Text>
                </View>
            </View>
            <View>
                <Header />
            </View>
        </ImageBackground>
    )
}

export default NextLotteryDraw;