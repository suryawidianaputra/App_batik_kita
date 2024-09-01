import {useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/navbar.js';
import {isLogin} from '../libs/authentication.js';
import {deleteAsyncData} from '../services/dev.js';

const Navbar = ({nav}) => {
  const deletes = async () => {
    await deleteAsyncData();
  };

  // useEffect(() => {
  //   deletes();
  // }, []);

  return (
    <View style={styles.containerNavbar}>
      <TouchableOpacity
        onPress={() => {
          nav.navigate('home');
        }}>
        <Image
          style={styles.image}
          source={require('../assets/icons/home.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => nav.navigate('cart')}>
        <Image
          style={styles.image}
          source={require('../assets/icons/whiteCart.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate('order')}>
        <Image
          style={styles.image}
          source={require('../assets/icons/assignment.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          nav.navigate('account');
        }}>
        <Image
          style={styles.image}
          source={require('../assets/icons/account.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
