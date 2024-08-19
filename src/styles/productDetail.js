import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  containerImage: {
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    aspectRatio: 1,
  },
  productPrice: {
    fontSize: 25,
    color: cssVariable.colors.dark,
    fontWeight: '900',
    marginBottom: 7,
  },
  cicilan: {
    fontSize: 15,
    color: cssVariable.colors.dark,
  },
  productName: {
    fontSize: 23,
    marginBottom: 5,
    color: cssVariable.colors.dark,
  },
  productDescription: {
    fontSize: 15,
    color: cssVariable.colors.dark,
  },
  soldOut: {
    color: cssVariable.colors.dark,
  },
  action: {
    width: '100%',
    backgroundColor: cssVariable.colors.orange,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    position: 'absolute',
    bottom: 0,
  },
  keranjang: {
    height: 50,
    width: '50%',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keranjangText: {
    fontSize: 20,
    color: cssVariable.colors.white,
  },
  beli: {
    backgroundColor: cssVariable.colors.green,
    marginRight: 15,
    height: 50,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  beliText: {
    fontSize: 20,
    color: cssVariable.colors.white,
  },
});
