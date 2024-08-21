import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import {styles} from '../styles/login';
import {Set, isLogin} from '../libs/authentication';
import {cssVariable} from '../styles/cssVariable';
import {api_url} from '../services/api_url';

const LoginScreen = ({navigation}) => {
  useEffect(() => {
    if (isLogin) return navigation.navigate('login');
    console.log(isLogin);
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  async function handleLogin() {
    if (!(trimmed(email) && trimmed(password)))
      return Alert.alert('Error', 'Data tidak lengkap', [{text: 'Ok'}]);
    if (!emailValidation(email))
      Alert.alert('Error', 'Email tidak valid', [{text: 'Ok'}]);
    else {
      const updata = await axios.get(`${api_url}/api/users?key=a`, {
        email: email,
        password: password,
      });
      // console.log(updata);
      if (updata.data) {
        await Set('isLogin', 'true');
        await Set('userName', userName);
        await Set('email', email);
        navigation.navigate('home');
      } else return Alert.alert('Error', 'Tolong login ulang', [{text: 'Ok'}]);
    }
  }

  return (
    <>
      <View style={{marginLeft: 10, marginTop: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <View
            style={{
              width: 18,
              height: 18,
              marginLeft: 10,
              borderLeftWidth: 3,
              borderBottomWidth: 3,
              borderColor: cssVariable.colors.orange,
              transform: [{rotate: '45deg'}],
              zIndex: 9999,
              top: 0,
            }}></View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <View style={styles.containerInput}>
          <Text style={{fontSize: 30, color: '#fff'}}>Login</Text>
          <View style={styles.input}>
            <Image
              source={require('../assets/icons/email.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.inputArea}
              placeholder="Masukan Email"
              placeholderTextColor="#fff"
              onChangeText={setEmail}
            />
          </View>
          <View>
            <View style={styles.input}>
              <Image
                source={require('../assets/icons/key.png')}
                style={styles.icon}
              />
              <TextInput
                style={styles.inputArea}
                placeholder="Masukan Password"
                placeholderTextColor="#fff"
                secureTextEntry={showPassword}
                onChangeText={setPassword}
              />
            </View>
            <Text
              onPress={() => setShowPassword(!showPassword)}
              style={{color: '#fff', marginTop: 5}}>
              {!showPassword ? 'Sembunyikan Password' : 'Tampilkan Password'}
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={{color: '#fff', fontSize: 18}}>Login</Text>
            </View>
          </TouchableOpacity>
          <Text
            style={styles.createAccount}
            onPress={() => navigation.navigate('register')}>
            Buat akuln
          </Text>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
