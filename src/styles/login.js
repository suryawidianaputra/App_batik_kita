import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  containerInput: {
    width: '90%',
    height: 500,
    backgroundColor: cssVariable.colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    gap: 20,
  },
  input: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#Fff',
    height: 'auto',
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: {
    width: 30,
    aspectRatio: 1,
    height: 'auto',
    margin: 2,
  },
  inputArea: {
    width: '80%',
    borderLeftWidth: 1,
    paddingLeft: 10,
    borderColor: '#Fff',
    color: '#fff',
    fontSize: 18,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 5,
  },
  createAccount: {
    textDecorationLine: 'underline',
    color: cssVariable.colors.black,
  },
});
