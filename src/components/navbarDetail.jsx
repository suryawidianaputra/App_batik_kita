import {TouchableOpacity, View, Image} from 'react-native';
import BackButton from './backButton';
import {cssVariable} from '../styles/cssVariable';

const NavbarDetail = ({nav}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        height: 40,
        width: '100%',
        zIndex: 9999,
      }}>
      <BackButton nav={nav} />
      <TouchableOpacity onPress={() => nav.navigate('cart')}>
        <Image
          source={require('../assets/icons/cart.png')}
          style={{
            width: 34,
            height: 35,
            marginRight: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavbarDetail;
