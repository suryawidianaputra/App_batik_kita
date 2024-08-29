import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    gap: 10,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 2,
    height: 45,
    paddingLeft: 10,
    borderRadius: 10,
  },
  containerProfile: {
    backgroundColor: cssVariable.colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 'auto',
    aspectRatio: 1,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 100,
  },
  userName: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    paddingTop: 5,
  },
  button: {
    width: '80%',
    backgroundColor: cssVariable.colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 13,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
