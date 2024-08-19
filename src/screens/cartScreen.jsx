import {View, Text} from 'react-native';
import BackButton from '../components/backButton';
import Navbar from '../components/navbar';

const CartScreen = ({navigation}) => {
  return (
    <View>
      <View style={{marginTop: 10, marginLeft: 5}}>
        <BackButton nav={navigation} />
      </View>
      <Text>CartScreen Page</Text>
    </View>
  );
};

export default CartScreen;
