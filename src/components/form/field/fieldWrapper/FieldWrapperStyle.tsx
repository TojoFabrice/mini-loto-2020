import { StyleSheet } from 'react-native';
import { Colors } from '../../../../styles';

export const FieldWrapperStyle = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 5
  },
  inputContainerInvalid: {},
  fieldDescription: {
    fontStyle: 'italic',
    fontSize: 10,
    marginTop: 5,
  },
  error: {
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingTop: 3,
    paddingBottom: 6,
    marginLeft: 15,
    color: Colors.red,
  },
  warning: {
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingTop: 3,
    paddingBottom: 6,
    marginLeft: 15,
    color: Colors.sienna,
  },
});