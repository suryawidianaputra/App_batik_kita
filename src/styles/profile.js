import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  containerProfile: {
    backgroundColor: cssVariable.colors.orange,
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  profilePicture: {
    width: 150,
    aspectRatio: 1,
    height: 'auto',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 75,
  },
  profileName: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pen: {
    width: 20,
    aspectRatio: 1,
    height: 'auto',
  },
  profileEmail: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
