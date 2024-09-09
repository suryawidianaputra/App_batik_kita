// payment.js
import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  body: {
    backgroundColor: cssVariable.colors.grey,
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  headerContainer: {
    top: 10,
    left: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textOnTop: {
    color: 'black',
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  addressContainer: {
    width: '100%',
    marginLeft: 20,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  locationImage: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  textHeader: {
    fontSize: 15,
    color: 'black',
  },
  containerOrderDetails: {
    backgroundColor: 'white',
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  productImage: {
    width: 85,
    height: 85,
    borderRadius: 13,
  },
  containerProductInfo: {
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orderQuantity: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  protectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  protectionButton: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: 'black',
    elevation: 4,
  },
  protectionText: {
    marginLeft: 5,
    fontSize: 15,
  },
  ongkirText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },

  //
  // containerPaymentOptions
  containerDeliveryOptions: {
    paddingTop: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
  delivMethodText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  containerDeliveryMethod: {
    marginTop: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    width: '90%',
    padding: 10,
    backgroundColor: cssVariable.colors.orange,
  },
  deliveryMethodText: {
    fontSize: 20,
    color: '#fff',
  },
  deliveryMethodSubText: {
    color: '#fff',
    fontSize: 16,
  },
  deliveryOptionsContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  containerTransactionDetails: {
    backgroundColor: 'white',
    paddingTop: 30,
  },
  transactionDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  texttransactionDetail: {
    fontSize: 17,
    color: '#000',
  },
});
