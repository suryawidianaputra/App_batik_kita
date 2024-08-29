import {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {getResponse} from '../services/api';
import {styles} from '../styles/card';
import {curency} from '../libs/currency';
import {debug, Set} from '../libs/authentication';

const Card = ({nav}) => {
  const [product, setProduct] = useState([]);

  async function getProduct() {
    const data = await axios.get('http://10.0.2.2:3550/api/product?key=a');
    setProduct(data.data.data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <View style={{height: 20}} />
      <Text style={styles.title}>Produk</Text>
      <View style={styles.cardContainer}>
        {product?.map((el, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => nav.navigate('detail', {data: el})}>
            <View style={styles.card}>
              <Image
                source={{uri: `http://10.0.2.2:3550/${el.product_images}`}}
                height={50}
                width={50}
                style={styles.image}
              />
              <Text style={styles.productName}>{el.product_name}</Text>
              <Text style={styles.productPrice}>
                {curency(el.product_price)}
              </Text>
              <Text style={styles.soldout}>terjual: {el.soldout}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{height: 55}}></View>
    </>
  );
};

export default Card;
