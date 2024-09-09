import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useState, useEffect} from 'react';
import {Get, Set} from '../libs/authentication';
import {styles} from '../styles/address';
import axios from 'axios';
import BackButton from '../components/backButton';

const AddAddress = ({navigation}) => {
  const [userName, setUserName] = useState('User');
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState(null);
  const [telepon, setTelepon] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const upAddress = async () => {
    if (!telepon || !address || !note) {
      return Alert.alert('Error', 'Lengkapi data pada form', [{text: 'Ok'}]);
    }

    try {
      const response = await axios.patch(
        `http://10.0.2.2:3550/api/users/address/${email}?key=a`,
        {
          address: address,
          note: note,
          phoneNumber: telepon,
        },
      );
      await Set('address', address);
      await Set('note', note);
      await Set('phone', telepon);
      Alert.alert('Success', 'Data berhasil diperbarui', [{text: 'Ok'}]);
    } catch (error) {
      Alert.alert('Error', 'Gagal memperbarui data', [{text: 'Ok'}]);
      console.error('Failed to update address:', error);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userEmail = await Get('email');
        setUserName(await Get('userName'));
        setEmail(userEmail);

        if (userEmail) {
          const response = await axios.get(
            `http://10.0.2.2:3550/api/users/profile/${userEmail}?key=a`,
          );
          const userData = response.data.data;
          setImage(userData.profilePitcure);
          setTelepon(telepon);
          setAddress(address);
          setNote(note);
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    getUserData();
  }, []);

  return (
    <>
      <View
        style={{
          position: 'absolute',
          zIndex: 9999,
          marginLeft: 5,
          marginTop: 10,
        }}>
        <BackButton color={'h'} nav={navigation} />
      </View>
      <View style={styles.containerProfile}>
        <View>
          <Image
            source={
              image
                ? {uri: `http://10.0.2.2:3550/${image}`}
                : require('../assets/icons/account.png')
            }
            style={styles.image}
          />
          <Text style={styles.userName}>{userName}</Text>
        </View>
      </View>
      <View
        style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={setTelepon}
              placeholder={'Nomer Telepon'}
              value={telepon}
            />
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={setAddress}
              placeholder={'Alamat'}
              value={address}
            />
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={setNote}
              placeholder={'Catatan pada kurir'}
              value={note}
            />
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.button} onPress={upAddress}>
              <Text style={styles.buttonText}>
                {note ? 'Ubah data' : 'Daftar'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default AddAddress;
