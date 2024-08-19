import {View, Text, Image} from 'react-native';
import {useState, useEffect} from 'react';
import {curency} from '../libs/currency';
import axios from 'axios';

// screens
import {styles} from '../styles/productDetail';
import NavbarDetail from '../components/navbarDetail';
import Comments from '../components/comments';

const DetailScreens = ({navigation, route}) => {
  const {data} = route.params;
  const [comment, setComment] = useState([]);

  const getData = async () => {
    const data = await axios.get('http://10.0.2.2:3500/api/comment/1?key=a');
    setComment(data.data);
  };

  console.log(comment.error);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavbarDetail nav={navigation} />
      <View>
        <View style={styles.containerImage}>
          <Image
            source={{uri: `http://10.0.2.2:3500/${data.product_images}`}}
            height={100}
            width={100}
            style={styles.image}
          />
        </View>
        <View style={{marginLeft: 10, marginVertical: 5}}>
          <Text style={styles.productPrice}>{curency(data.product_price)}</Text>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Image
              source={require('../assets/icons/gopay.png')}
              style={{width: 15, height: 15}}
            />
            <Text style={styles.cicilan}>
              {curency(Math.floor(data.product_price / 12))} x 12 Bulan dengan
              Gopay
            </Text>
          </View>
        </View>
        <View style={{borderWidth: 0.5}}></View>
        <View style={{marginLeft: 10, marginTop: 5}}>
          <Text style={styles.productName}>{data.product_name}</Text>
          <Text style={styles.productDescription}>
            {data.product_description}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 15, gap: 10}}>
            <Text style={styles.soldOut}>Terjual: {data.soldout}</Text>
            <Image
              source={require('../assets/icons/comment.png')}
              style={{width: 20, aspectRatio: 1}}
            />
            <Text>1</Text>
          </View>
        </View>
      </View>
      <Text
        style={{fontSize: 20, color: '#000', marginLeft: 10, marginTop: 15}}>
        Komentar:
      </Text>
      {comment.length ? (
        <View>
          <Text style={{marginLeft: 10, fontSize: 18}}>Belum ada komentar</Text>
        </View>
      ) : (
        <Comments data={comment} />
      )}
      {/* action */}
      <View style={styles.action}>
        <View style={styles.keranjang}>
          <Text style={styles.keranjangText}>+ Keranjang</Text>
        </View>
        <View style={styles.beli}>
          <Text style={styles.beliText}>Beli</Text>
        </View>
      </View>
    </>
  );
};

export default DetailScreens;
