import {View, Text, ScrollView, Image} from 'react-native';
import {useState, useEffect} from 'react';
import BackButton from '../components/backButton';
import axios from 'axios';
import {Get} from '../libs/authentication';
import {styles} from '../styles/cart';

const CartScreen = ({navigation}) => {
  const [cartData, setCartData] = useState([]);
  const [accountId, setAccountId] = useState(null);

  const getCartData = async () => {
    const response = await axios.get(
      `http://10.0.2.2:3550/api/cart/${accountId}?key=a`,
    );
    setCartData(response.data.data);
  };

  useEffect(() => {
    const getData = async () => {
      setAccountId(await Get('account_id'));
    };
    getData();
    getCartData();
    console.log(cartData);
  }, [accountId]);

  return (
    <ScrollView style={styles.fContainer}>
      <View style={{marginTop: 10, marginLeft: 5, position: 'absolute'}}>
        <BackButton nav={navigation} />
      </View>
      <Text style={styles.title}>Cart</Text>
      {cartData?.map((el, i) => (
        <View key={i}>
          <View>
            <Image source={{uri: `http://10.0.2.2:3550/${el.product_image}`}} />
            <Text>{el.product_name}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default CartScreen;
