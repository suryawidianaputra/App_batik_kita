import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useState, useEffect} from 'react';
import {Get} from '../libs/authentication';
import {styles} from '../styles/address';
import axios from 'axios';
import BackButton from '../components/backButton';

const AddAddress = ({navigation}) => {
  const [userName, setUserName] = useState('User');
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState(null);
  const [telepon, setTelepon] = useState(null);
  const [address, setAddress] = useState(null);
  const [note, setNote] = useState(null);

  const upAddress = async () => {
    if (telepon === null && (address === null) & (note === null))
      return Alert.alert('Error', 'Lengkapi data pada form', [{text: 'Ok'}]);
    else {
      const response = await axios.patch(
        `http://10.0.2.2:3550/api/users/address/${email}?key=a`,
        {
          address: address,
          note: note,
          phoneNumber: telepon,
        },
        await Set('address', address),
        await Set('note', note),
        await Set('phone', telepon),
      );
    }
  };

  useEffect(() => {
    const getUername = async () => {
      setUserName(await Get('userName'));
      setEmail(await Get('email'));

      const response = await axios.get(
        `http://10.0.2.2:3550/api/users/profile/${email}?key=a`,
      );
      setImage(response.data.data.profilePitcure);
      setTelepon(response.data.data.phoneNumber);
      setAddress(response.data.data.address);
      setNote(response.data.data.note);
    };
    getUername();
  }, [email]);
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
              image !== null
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
                {note !== null ? 'Ubah data' : 'Daftar'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default AddAddress;
