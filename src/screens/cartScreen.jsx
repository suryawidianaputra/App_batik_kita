import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import BackButton from '../components/backButton';
import axios from 'axios';
import {Get, Set} from '../libs/authentication';
import {styles} from '../styles/cart';
import {curency} from '../libs/currency';

const CartScreen = ({navigation}) => {
  const [cartData, setCartData] = useState([]);
  const [accountId, setAccountId] = useState(null);

  const getCartData = async id => {
    if (accountId) {
      const response = await axios.get(
        `http://10.0.2.2:3550/api/cart/${accountId}?key=a`,
      );
      setCartData(response.data.data);
    }
  };

  const deleteCart = async id => {
    const response = await axios.delete(
      `http://10.0.2.2:3550/api/cart/${id}?key=a`,
    );
    getCartData();
  };

  useEffect(() => {
    const getData = async () => {
      await Set('account_id', '1');
      setAccountId(await Get('account_id'));
    };
    getData();
  }, []);

  useEffect(() => {
    getCartData();
  }, [accountId]);

  return (
    <View style={styles.fContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButtonContainer}>
        <BackButton nav={navigation} />
      </TouchableOpacity>
      <Text style={styles.title}>Cart</Text>
      <ScrollView contentContainerStyle={styles.cartListContainer}>
        {cartData?.map((el, i) => (
          <TouchableOpacity
            key={i}
            style={styles.cart}
            onPress={() =>
              navigation.navigate('detail', {data: {id: el.product_id}})
            }>
            <View style={styles.cartItem}>
              <Image
                source={{
                  uri: `http://10.0.2.2:3550/${el.product_image}?key=a`,
                }}
                style={styles.productImage}
              />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{el.product_name}</Text>
                <Text style={styles.productPrice}>
                  {curency(el.product_price)}
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => deleteCart(el.id)}>
                <Image
                  source={require('../assets/icons/trash.png')}
                  style={styles.trashImage}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CartScreen;
