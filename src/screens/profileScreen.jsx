import {Text, View} from 'react-native';
import {useState, useEffect} from 'react';
import {isLogin} from '../libs/authentication';
import BackButton from '../components/backButton';

const ProfileScreen = ({navigation}) => {
  if (!isLogin) return navigation.navigate('login');

  return (
    <>
      <View style={{marginTop: 10, marginLeft: 5}}>
        <BackButton nav={navigation} />
      </View>
      <View>
        <Text>Hallo Sss</Text>
      </View>
    </>
  );
};

export default ProfileScreen;
