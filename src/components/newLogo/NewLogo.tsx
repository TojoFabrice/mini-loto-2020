import React from 'react';
import { Image, View } from 'react-native';
import { NewLogoStyle } from './NewLogoStyle';
import { images } from '../../styles/Image';

 const NewLogo = ({logo, menu}: any) => {
  return (
    <View style={NewLogoStyle.container}>
      {
       logo ?
        <>
          <Image style={NewLogoStyle.image} source={images.logoMini} />
        </>
        : 
        <Image style={NewLogoStyle.image} source={images.newLogo} />
      }
      
    </View>
  );
}

export default NewLogo ;