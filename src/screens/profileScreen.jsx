import {Text, View, Alert, Image, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import {isLogin, Authentication, Get} from '../libs/authentication';
import BackButton from '../components/backButton';
import {styles} from '../styles/profile';
import axios from 'axios';
import ProfileOptions from '../components/profileOptions';

const ProfileScreen = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState('');
  const [isShowEditProfile, setIsShowEdeitProfile] = useState(false);

  async function getUserData() {
    try {
      const userEmail = await Get('email');
      setEmail(await Get('email'));
      setUserName(await Get('userName'));
      if (userEmail) {
        const response = await axios.get(
          `http://10.0.2.2:3550/api/users/profile/${userEmail}?key=a`,
        );
        setUserData(response.data.data);
        setImage(response.data.data.profilePitcure);
      } else {
        console.log('User email not found in storage');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    const checkLoginStatus = async () => {
      await Authentication();
      if (!isLogin) {
        // Alert.alert(
        //   'Not Logged In',
        //   'You need to be logged in to view this page',
        //   [{text: 'OK', onPress: () => navigation.navigate('register')}],
        // );
        navigation.navigate('login');
      }
    };
    checkLoginStatus();
    getUserData();
  }, [navigation]);

  return (
    <>
      <View
        style={{
          marginTop: 10,
          marginLeft: 5,
          position: 'absolute',
          zIndex: 9999,
        }}>
        <BackButton nav={navigation} color={'white'} />
      </View>
      <View style={styles.containerProfile}>
        <View style={styles.containerImage}>
          <Image
            source={
              image !== null
                ? {uri: `http://10.0.2.2:3550/${image}`}
                : require('../assets/icons/account.png')
            }
            style={styles.profilePicture}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}>
            <Text style={styles.profileName}>{username}</Text>
            <TouchableOpacity
              onPress={() => setIsShowEdeitProfile(!isShowEditProfile)}>
              <Image
                source={require('../assets/icons/pen.png')}
                style={styles.pen}
              />
            </TouchableOpacity>
            {isShowEditProfile && (
              <TouchableOpacity
                style={{position: 'absolute', left: 130}}
                onPress={() =>
                  navigation.navigate('editProfile', {data: {email: email}})
                }>
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 5,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                  }}>
                  <Text>Edit Profile</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.profileEmail}>{email}</Text>
          {userData !== null && (
            <Text style={styles.profileEmail}>
              {userData !== null && userData.phoneNumber}
            </Text>
          )}
        </View>
      </View>
      <ProfileOptions nav={navigation} />
    </>
  );
};

export default ProfileScreen;
