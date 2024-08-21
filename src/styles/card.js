import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  title: {
    color: cssVariable.colors.orange,
    fontSize: 30,
    textAlign: 'center',
    padding: 3,
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  card: {
    width: 200,
    marginBottom: 10,
    padding: 3,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 15,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    height: 'auto',
    borderRadius: 10,
    objectFit: 'cover',
  },
  productName: {
    paddingHorizontal: 10,
    paddingTop: 5,
    fontSize: 15,
    color: cssVariable.colors.orange,
    paddingBottom: 5,
  },
  productPrice: {
    paddingHorizontal: 10,
    fontSize: 18,
    color: cssVariable.colors.black,
    fontWeight: '900',
  },
  soldout: {
    paddingHorizontal: 10,
    color: cssVariable.colors.black,
    marginBottom: 5,
  },
});
