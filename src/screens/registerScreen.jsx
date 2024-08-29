import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useState, useEffect} from 'react';
import {styles} from '../styles/login';
import {trimmed, emailValidation} from '../libs/validasiText';
import {Set, isLogin, Authentication} from '../libs/authentication';
import BackButton from '../components/backButton';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setComfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  // Validasi duan Registrasi
  async function handleRegister() {
    if (
      !(
        trimmed(userName) &&
        trimmed(email) &&
        trimmed(password) &&
        trimmed(confirmPassword)
      )
    ) {
      return Alert.alert('Error', 'Data tidak lengkap', [{text: 'Ok'}]);
    }
    if (!emailValidation(email)) {
      return Alert.alert('Error', 'Email tidak valid', [{text: 'Ok'}]);
    }
    if (password !== confirmPassword) {
      return Alert.alert(
        'Error',
        'Konfirmasi password tidak sama dengan password',
        [{text: 'OK'}],
      );
    } else {
      try {
        const response = await axios.post(
          `http://10.0.2.2:3550/api/users?key=a`,
          {
            username: userName,
            email: email,
            password: password,
          },
        );
        if (response.data) {
          await Set('isLogin', 'true');
          await Set('userName', userName);
          await Set('email', email);
          await Set('account_id', response.data.data.id);
          await Authentication();

          if (isLogin) {
            return navigation.navigate('account');
          }
        } else {
          return Alert.alert('Error', 'Tolong login ulang', [{text: 'Ok'}]);
        }
      } catch (error) {
        console.log('Register error:', error);
        return Alert.alert('Error', 'Terjadi kesalahan, coba lagi', [
          {text: 'Ok'},
        ]);
      }
    }
  }

  return (
    <>
      <View style={{marginLeft: 10, marginTop: 10}}>
        <BackButton nav={navigation} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <View style={styles.containerInput}>
          <Text style={{fontSize: 30, color: '#fff'}}>Buat akun</Text>
          <View style={styles.input}>
            <Image
              source={require('../assets/icons/userWhite.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.inputArea}
              placeholder="Masukan Username"
              placeholderTextColor="#fff"
              onChangeText={setUserName}
            />
          </View>
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
          <View>
            <View style={styles.input}>
              <Image
                source={require('../assets/icons/key.png')}
                style={styles.icon}
              />
              <TextInput
                style={styles.inputArea}
                placeholder="Masukan Ulang Password"
                placeholderTextColor="#fff"
                secureTextEntry={showPassword}
                onChangeText={setComfirmPassword}
              />
            </View>
            <Text
              onPress={() => setShowPassword(!showPassword)}
              style={{color: '#fff', marginTop: 5}}>
              {!showPassword ? 'Sembunyikan Password' : 'Tampilkan Password'}
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <View>
              <Text style={{color: '#fff', fontSize: 18}}>Daftar</Text>
            </View>
          </TouchableOpacity>
          <Text
            style={styles.createAccount}
            onPress={() => navigation.navigate('login')}>
            Login
          </Text>
        </View>
      </View>
    </>
  );
};

export default RegisterScreen;
