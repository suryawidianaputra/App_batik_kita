import {View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/navbar.js';

const Navbar = ({nav}) => {
  return (
    <View style={styles.containerNavbar}>
      <TouchableOpacity
        onPress={() => {
          console.log('Hh');
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
      <TouchableOpacity onPress={() => nav.navigate('process')}>
        <Image
          style={styles.image}
          source={require('../assets/icons/assignment.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate('account')}>
        <Image
          style={styles.image}
          source={require('../assets/icons/account.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
