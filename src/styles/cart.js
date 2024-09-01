import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  fContainer: {
    flex: 1,
    backgroundColor: cssVariable.colors.grey,
    padding: 15,
  },
  backButtonContainer: {
    marginTop: 10,
    position: 'absolute',
    top: 10,
    left: 15,
    zIndex: 999,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: cssVariable.colors.orange,
    marginVertical: 20,
  },
  cartListContainer: {
    alignItems: 'center',
  },
  cart: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  cartItem: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 7,
  },
  productDetails: {
    paddingLeft: 15,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: cssVariable.colors.green,
  },
  trashImage: {
    width: 25,
    height: 25,
  },
});
