import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  containerNavbar: {
    height: 55,
    position: 'absolute',
    width: '100%',
    zIndex: 3,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: cssVariable.colors.orange,
  },
  image: {
    width: 30,
    height: 30,
  },
});
