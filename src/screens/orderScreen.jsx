import {View, Text, ScrollView} from 'react-native';
import BackButton from '../components/backButton';

const OrderScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{position: 'absolute', top: 10, zIndex: 999, left: 5}}>
        <BackButton nav={navigation} />
      </View>
      {/*  */}
      {/*  */}
    </ScrollView>
  );
};

export default OrderScreen;
