// PaymentScreen.js
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import BackButton from '../components/backButton';
import {curency} from '../libs/currency';
import {Get} from '../libs/authentication';
import {styles} from '../styles/payment';
import {cssVariable} from '../styles/cssVariable';

const PaymentScreen = ({navigation, route}) => {
  const {data} = route.params;
  const [note, setNote] = useState(null);
  const [address, setAddress] = useState(null);
  const [username, setUsername] = useState(null);
  const [productData, setProductData] = useState({});
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
  const [payment, setPayment] = useState(1);
  const [deliveryOptions, setDeliveryOptions] = useState(1);
  const [protection, setProtection] = useState(false);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(
        `http://10.0.2.2:3550/api/product/${data.product_id}?key=a`,
      );
      setProductData(response.data.data);
      setTotalPrice(response.data.data.product_price * data.quantity);
    };
    getProductById();
  }, [data.product_id]);

  useEffect(() => {
    const getUserData = async () => {
      setNote(await Get('note'));
      setAddress(await Get('address'));
      setUsername(await Get('userName'));
    };
    getUserData();
  }, []);

  return (
    <View style={styles.body}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <BackButton nav={navigation} />
          <Text style={styles.textOnTop}>Bali langsung</Text>
        </View>
        <View style={{height: 25}} />
        <View style={styles.addressContainer}>
          <Text style={styles.textHeader}>Alamat pengiriman kamu: </Text>
          <View style={styles.addressRow}>
            <Image
              source={require('../assets/icons/location.png')}
              style={styles.locationImage}
            />
            <Text style={styles.name}>Rumah - {username}</Text>
          </View>
          <Text style={styles.textHeader}>
            {username} ({note})
          </Text>
        </View>
      </View>

      {/* Order Details */}
      <View style={styles.containerOrderDetails}>
        <View style={styles.productRow}>
          <Image
            source={{uri: `http://10.0.2.2:3550/${productData.product_images}`}}
            style={styles.productImage}
          />
          <View style={styles.containerProductInfo}>
            <Text style={styles.productName}>{productData.product_name}</Text>
            <Text style={styles.productPrice}>
              {curency(productData.product_price * data.quantity)}
            </Text>
            <Text style={styles.orderQuantity}>Jumlah: {data.quantity}</Text>
          </View>
        </View>
        <View style={styles.protectionRow}>
          <TouchableOpacity
            style={[
              styles.protectionButton,
              {
                backgroundColor: protection
                  ? cssVariable.colors.green
                  : 'white',
              },
            ]}
            onPress={() => setProtection(!protection)}
          />
          <Text
            style={styles.protectionText}
            onPress={() => setProtection(!protection)}>
            Proteksi barang
          </Text>
        </View>
        <Text style={styles.ongkirText}>{curency(3900)}</Text>
      </View>

      {/* Delivery Options */}
      <View style={styles.containerDeliveryOptions}>
        <Text style={styles.delivMethodText}>Metode pengiriman</Text>
        <TouchableOpacity
          style={styles.containerDeliveryMethod}
          onPress={() => setShowDeliveryOptions(!showDeliveryOptions)}>
          <Text style={styles.deliveryMethodText}>
            {deliveryOptions ? 'Cargo' : 'Reguler'}
          </Text>
          <Text style={styles.deliveryMethodSubText}>
            {deliveryOptions ? curency(57000) : curency(24000)}
          </Text>
        </TouchableOpacity>
        {showDeliveryOptions && (
          <View
            style={[
              styles.deliveryOptionsContainer,
              {
                borderColor: cssVariable.colors.orange,
                borderWidth: 2,
                borderRadius: 10,
                padding: 5,
                width: '90%',
              },
            ]}>
            <TouchableOpacity
              style={[styles.containerDeliveryMethod, {marginTop: 2}]}
              onPress={() => {
                setDeliveryOptions(true);
                setShowDeliveryOptions(false);
              }}>
              <Text style={styles.deliveryMethodText}>Cargo</Text>
              <Text style={styles.deliveryMethodSubText}>{curency(57000)}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.containerDeliveryMethod, {marginTop: 2}]}
              onPress={() => {
                setDeliveryOptions(false);
                setShowDeliveryOptions(false);
              }}>
              <Text style={styles.deliveryMethodText}>Reguler</Text>
              <Text style={styles.deliveryMethodSubText}>{curency(24000)}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Motode */}
      <View>
        {/*  */}
        {/*  */}
      </View>

      {/* transaction details */}
      <View style={styles.containerTransactionDetails}>
        <Text
          style={{
            paddingLeft: 10,
            fontSize: 20,
            color: '#000',
            paddingBottom: 7,
          }}>
          Detail transaksi
        </Text>
        <View style={styles.transactionDetail}>
          <Text style={styles.texttransactionDetail}>Harga produk</Text>
          <Text style={styles.texttransactionDetail}>
            {curency(productData.product_price * data.quantity)}
          </Text>
        </View>
        <View style={styles.transactionDetail}>
          <Text style={styles.texttransactionDetail}>Proteksi produk</Text>
          <Text style={styles.texttransactionDetail}>
            {curency(protection ? 3900 : 0)}
          </Text>
        </View>
        <View style={styles.transactionDetail}>
          <Text style={styles.texttransactionDetail}>
            Perngiriman {deliveryOptions ? 'Cargo' : 'Reguler'}
          </Text>
          <Text style={styles.texttransactionDetail}>
            {curency(deliveryOptions ? 57000 : 24000)}
          </Text>
        </View>
        <View style={styles.transactionDetail}>
          <Text style={styles.texttransactionDetail}>Biaya penanganan</Text>
          <Text style={styles.texttransactionDetail}>{curency(1500)}</Text>
        </View>
        <View style={styles.transactionDetail}>
          <Text style={styles.texttransactionDetail}>Total:</Text>
          <Text style={styles.texttransactionDetail}>
            {curency(
              totalPrice +
                (protection ? 3900 : 0) +
                (deliveryOptions ? 57000 : 24000) +
                1500,
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;
