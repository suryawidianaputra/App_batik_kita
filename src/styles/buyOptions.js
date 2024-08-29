import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  mainContainer: {},
  box: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: cssVariable.colors.white,
    borderRadius: 10,
  },
});
