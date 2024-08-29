import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  fContainer: {
    backgroundColor: cssVariable.colors.grey,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: cssVariable.colors.orange,
    marginTop: 5,
  },
});
