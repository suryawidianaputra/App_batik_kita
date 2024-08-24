import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useState} from 'react';
import {styles} from '../styles/login';
import {Set, Get, isLogin, Authentication} from '../libs/authentication';
import {cssVariable} from '../styles/cssVariable';
import {emailValidation, trimmed} from '../libs/validasiText';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  async function handleLogin() {
    if (!(trimmed(email) && trimmed(password))) {
      return Alert.alert('Error', 'Data tidak lengkap', [{text: 'Ok'}]);
    }
    if (!emailValidation(email)) {
      return Alert.alert('Error', 'Email tidak valid', [{text: 'Ok'}]);
    } else {
      try {
        const response = await axios.post(
          `http://10.0.2.2:3550/api/users/login?key=a`,
          {
            email: email,
            password: password,
          },
        );
        if (response.data.data.username) {
          await Set('isLogin', 'true');
          await Set('userName', response.data.data.username);
          await Set('email', response.data.data.email);
          await Authentication(); // Mengupdate status otentikasi

          if (isLogin) {
            return navigation.navigate('account');
          }
        } else {
          return Alert.alert('Error', 'Tolong login ulang', [{text: 'Ok'}]);
        }
      } catch (error) {
        console.log('Login error:', error);
        return Alert.alert('Error', 'Terjadi kesalahan, coba lagi', [
          {text: 'Ok'},
        ]);
      }
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
            }}
          />
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
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <View>
              <Text style={{color: '#fff', fontSize: 18}}>Login</Text>
            </View>
          </TouchableOpacity>
          <Text
            style={styles.createAccount}
            onPress={() => navigation.navigate('register')}>
            Buat akun
          </Text>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
