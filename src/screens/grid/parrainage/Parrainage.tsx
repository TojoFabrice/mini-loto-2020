import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import { images } from '../../../styles/Image';
import ParrainageStyles from './ParrainageStyle';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../styles';
import { fonts } from '../../../styles/fonts';

const Parrainage = () => {
    const { goBack } = useNavigation();

    return (
      <ImageBackground 
          style={{flex: 1}}
          source={images.parrainage.background}
      >
        <View style={ParrainageStyles.headerMode}>
            <TouchableOpacity 
                onPress={() => goBack()} 
                style={ParrainageStyles.headerModeIcon}
            >
                <Icon name="arrow-back" color={Colors.white} />
            </TouchableOpacity>
            <View style={ParrainageStyles.headerModeTitleContent}>
                <Text style={ParrainageStyles.headerModeTitle}>Parrainage</Text>
            </View>
        </View>
        <View style={ParrainageStyles.gainContainer}>
              <ImageBackground
                style={{
                  marginTop: 20,
                  height: 130,
                  marginBottom: 15,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                source={images.parrainage.grand}
                resizeMode="stretch"
              >
                <Text
                  style={{
                      fontFamily: fonts.poppins.regular,
                      color: Colors.yellow,
                      fontWeight: "bold",
                      fontSize: 30,
                      marginRight: 50
                  }}
                >
                  Grand
                </Text>
                <Text
                  style={{
                      fontFamily: fonts.poppins.regular,
                      color: Colors.whiteShadow,
                      fontWeight: "bold",
                      fontSize: 30,
                  }}
                >€7.000</Text>
              </ImageBackground>
            </View>
        <ScrollView>
          <View style={{ 
            width: '100%', 
            height: 75,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderTopColor: Colors.grey1,
            borderBottomColor: Colors.grey1,
            borderTopWidth: 1,
            borderBottomWidth: 1
          }}
          >
            <Text style={{textAlign: 'center', width: '60%', fontSize: 16}}>
              Pour chaque ami inscrit gagnez jusqu'à
              <Text style={{color: Colors.yellow}}> 10% </Text> 
              de ses jackpots
            </Text>
          </View>        
          <View 
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={{
                width: 300,
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 25,
                backgroundColor: Colors.yellow,
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.poppins.regular,
                  color: Colors.black,
                  fontSize: 16,
                }}
              >
                Parrainer gagner!
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            style={{
              marginTop: 10,
              height: 150,
              width: 250,
              alignSelf: 'center',
            }}
            source={images.parrainage.illusion}
            resizeMode="contain"
          />     
          <View style={{
            backgroundColor: Colors.white,
            height: 400,
            width: '90%',
            marginBottom: 50,
            alignSelf: 'center',
            borderRadius: 25
          }}>
            <View style={{
              height: 70,
              borderTopEndRadius: 25,
              borderTopStartRadius: 25,
              backgroundColor: Colors.darkBlue,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{ 
                fontFamily: fonts.poppins.bold,
                fontSize: 18, 
                fontWeight: 'bold',
                color: Colors.white
                }}
              >Mes amis inscrits</Text>
            </View>
            <View style={{
              height: 100,
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
              backgroundColor: Colors.greyTrans
            }}>
                <View style={{
                  width: '30%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image
                    style={{
                      height: 50,
                      width: 50, 
                    }}
                    source={images.parrainage.avatar}
                  />
                </View>
                <View style={{
                  width: '70%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexDirection: 'column'
                }}>
                  <Text style={{ 
                    fontFamily: fonts.poppins.bold,
                    fontSize: 14, 
                    fontWeight: 'bold',
                    color: Colors.darkBlue,
                    marginBottom: 5
                    }}
                  >Bruce Doiron</Text>
                  <Text 
                    style={{ 
                      fontFamily: fonts.poppins.regular,
                      fontSize: 12, 
                      color: Colors.darkBlue,
                  }}>Inscrit le 27/06/2020 | à 10h57</Text>
                </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>      
    )
}

export default Parrainage;