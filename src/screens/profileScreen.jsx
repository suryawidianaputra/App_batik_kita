import {Text, View, Alert} from 'react-native';
import {useEffect} from 'react';
import {isLogin, Authentication, debug} from '../libs/authentication';
import BackButton from '../components/backButton';

const ProfileScreen = ({navigation}) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      await Authentication();
      if (!isLogin) {
        Alert.alert(
          'Not Logged In',
          'You need to be logged in to view this page',
          [{text: 'OK', onPress: () => navigation.navigate('home')}],
        );
      }
    };

    debug();
    checkLoginStatus();
  }, [navigation]);

  return (
    <>
      <View style={{marginTop: 10, marginLeft: 5}}>
        <BackButton nav={navigation} />
      </View>
      <View>
        <Text>Hello, User</Text>
      </View>
    </>
  );
};

export default ProfileScreen;
