import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useState, useEffect} from 'react';
import {curency} from '../libs/currency';
import axios from 'axios';

// screens
import {styles} from '../styles/productDetail';
import NavbarDetail from '../components/navbarDetail';
import Comments from '../components/comments';
import AddComment from '../components/addComment';
import BuyOptions from '../components/buyOptions';

const DetailScreens = ({navigation, route}) => {
  const {data} = route.params;
  const [comment, setComment] = useState([]);
  const [addComment, setAddComment] = useState('');
  // const [showOptions, setShowOptions] = useState('');
  const [cart, setCart] = useState(false);
  const [status, setStatus] = useState(false);

  const getData = async () => {
    const data = await axios.get(`http://10.0.2.2:3550/api/comment/1?key=a`);
    setComment(data.data.data);
  };

  const handleCreateComment = async () => {
    const data = await axios.post(`http://10.0.2.2:3550/api/comment?key=a`, {});
  };

  const actions = async e => {
    const response = await axios.post(`http://10.0.2.2:3550/api`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* action */}
      <BuyOptions
        nav={navigation}
        status={status}
        cart={cart}
        setCart={setCart}
        setStatus={setStatus}
        data={data}
      />
      <ScrollView>
        <NavbarDetail nav={navigation} />
        <View>
          <View style={styles.containerImage}>
            <Image
              source={{uri: `http://10.0.2.2:3550/${data.product_images}`}}
              height={100}
              width={100}
              style={styles.image}
            />
          </View>
          <View style={{marginLeft: 10, marginVertical: 5}}>
            <Text style={styles.productPrice}>
              {curency(data.product_price)}
            </Text>
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
              Deskripsi: {data.product_description}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 15, gap: 10}}>
              <Text style={styles.soldOut}>Terjual: {data.soldout}</Text>
              <Image
                source={require('../assets/icons/comment.png')}
                style={{width: 20, aspectRatio: 1}}
              />
              <Text>{comment.length}</Text>
            </View>
            <Text style={{marginTop: 5, color: '#000', fontSize: 15}}>
              Estimasi: 1 - 2 Minggu
            </Text>
          </View>
        </View>
        <View style={{borderWidth: 0.5, marginTop: 10}} />

        <ScrollView>
          <Text
            style={{fontSize: 20, color: '#000', marginLeft: 10, marginTop: 5}}>
            Komentar:
          </Text>
          {/* add comment */}
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 40,
              justifyContent: 'center',
              gap: 5,
              marginBottom: 5,
            }}>
            <TextInput
              style={styles.textInput}
              onChangeText={setAddComment}
              value={addComment}
            />
            <TouchableOpacity style={styles.inputButton}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}>
                <Text style={{color: '#fff', fontSize: 18}} c>
                  Kirim
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* add comment */}
          <Comments data={comment} />
        </ScrollView>
      </ScrollView>
      <View style={styles.action}>
        <TouchableOpacity
          style={styles.keranjang}
          onPress={() => {
            setStatus(true);
            setCart(true);
          }}>
          <Text style={styles.keranjangText}>+ Keranjang</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.beli}
          onPress={() => {
            setStatus(true);
            setCart(false);
          }}>
          <Text style={styles.beliText}>Beli</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DetailScreens;
