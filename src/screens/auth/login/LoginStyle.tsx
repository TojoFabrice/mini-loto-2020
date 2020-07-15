import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';

const width = 260;
const height = 50;

export const LoginStyle = StyleSheet.create({
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
  forgotTxt: {
    left: 70,
    color: Colors.grey,
    textDecorationLine: 'underline',
    marginBottom: 40,
    marginTop: 10,
    fontSize: 12,
  },
  signupBtn: {
    marginTop: 50,
    fontSize: 20,
    color: Colors.grey,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  button: {
    width: 225,
    height: height,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  notificationContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    marginBottom: 25,
    backgroundColor: Colors.red,
  },
  notificationMessage: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.white,
  },
});