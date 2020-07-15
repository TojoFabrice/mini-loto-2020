import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height }  = Dimensions.get('window');
const newWidth = width < 600 ? width: width * 0.81;

const ScreenDimensions = {
    widthScreen: width < height ? width: Platform.OS=="ios" ? height : height * 0.94,
    heightScreen: width < height ? Platform.OS == "ios" ? height : height * 0.94 : width,
}

const MainStyle = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export { MainStyle, ScreenDimensions };