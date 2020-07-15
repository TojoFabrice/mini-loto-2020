import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';

const width = 260;
const height = 50;

export const ForgotPasswordStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white
  },
  logo: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  button: {
    width: 225,
    height: height,
    marginTop: 30,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    borderRadius: 5,
  }
});