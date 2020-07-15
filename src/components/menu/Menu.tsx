import React from 'react';
import { Image, View } from 'react-native';
import { MenuStyle } from './MenuStyle';
import { images } from '../../styles/Image';

const Menu = () => {
    return (
      <View style={MenuStyle.container}>
          <Image style={MenuStyle.image} source={images.Menu} />
      </View>
    );
  }

export default Menu ;
