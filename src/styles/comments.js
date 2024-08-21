import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  containerComments: {
    width: '95%',
    marginTop: 10,
    shadowColor: '#000',
    elevation: 1,
    // borderWidth: 1,
    // borderRadius: 5,
    padding: 10,
  },
  userIcon: {
    width: 30,
    height: 'auto',
    objectFit: 'cover',
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 100,
  },
  userName: {
    fontSize: 20,
    color: cssVariable.colors.black,
    marginLeft: 5,
  },
  comment: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 35,
    color: cssVariable.colors.black,
  },
});
