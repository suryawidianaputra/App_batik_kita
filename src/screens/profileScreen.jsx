import {Text, View} from 'react-native';
import {isLogin} from '../libs/authentication';

const ProfileScreen = ({navigation}) => {
  if (!isLogin) navigation.navigate('login');

  return (
    <>
      <View>
        <Text>Hallo S</Text>
      </View>
    </>
  );
};

export default ProfileScreen;
