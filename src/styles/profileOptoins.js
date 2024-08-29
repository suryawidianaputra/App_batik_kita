import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: cssVariable.colors.grey,
    shadowColor: 'black',
    elevation: 5,
  },
  text: {
    fontSize: 15,
  },
});
