import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {useState, useEffect} from 'react';
import {styles} from '../styles/buyOptions';
import {cssVariable} from '../styles/cssVariable';
import {curency} from '../libs/currency';
import axios from 'axios';
import {Get} from '../libs/authentication';

const BuyOptions = ({nav, id, status, data, setStatus, cart, setCart}) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(data.product_price);
  const [accountId, setAccountId] = useState(null);
  const [email, setEmail] = useState(null);

  const upData = async () => {
    const accountId = await Get('account_id');

    if (cart) {
      setStatus(false);
      const upload = await axios.post(`http://10.0.2.2:3550/api/cart?key=a`, {
        product_id: data.id,
        account_id: parseInt(accountId),
        email: email,
      });
    }
  };

  useEffect(() => {
    const getAccountId = async () => {
      setAccountId(await Get('account_id'));
      setEmail(await Get('email'));
    };
    getAccountId();
  });

  return (
    <View
      style={{
        width: '100%',
        height: '45%',
        position: 'absolute',
        bottom: status ? 0 : -400,
        zIndex: 9999,
        backgroundColor: cssVariable.colors.orange,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{position: 'absolute', right: 25, top: 20}}>
        <TouchableOpacity onPress={() => setStatus(false)}>
          <Image
            source={require('../assets/icons/closeWhite.png')}
            style={{width: 30, height: 20}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
        }}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>
          <Text style={{fontSize: 30, color: 'black'}}>-</Text>
        </TouchableOpacity>
        <View style={styles.box}>
          <Text style={{fontSize: 18, color: 'black'}}>{quantity}</Text>
        </View>
        <TouchableOpacity
          style={styles.box}
          onPress={() => setQuantity(quantity + 1)}>
          <Text style={{fontSize: 20, color: 'black'}}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={{marginTop: 10, color: 'white', fontSize: 17}}>
        Harga barang: {curency(price * quantity)}
      </Text>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 10,
          }}>
          <TouchableOpacity onPress={upData}>
            <Text style={{fontSize: 18}}>
              {cart ? 'Tambahkan' : 'Beli Langsung'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BuyOptions;
