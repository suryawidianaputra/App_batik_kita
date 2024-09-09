import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {isLogin} from './libs/authentication';
const Stack = createNativeStackNavigator();

// screens
import HomeScreen from './screens/homeScreen';
import DetailScreens from './screens/productDetail';
import CartScreen from './screens/cartScreen';
import LoginScreen from './screens/loginScreen';
import ProfileScreen from './screens/profileScreen';
import RegisterScreen from './screens/registerScreen';
import EditProfile from './screens/editProfileScreen';
import AddAddress from './screens/alamat';
import OrderScreen from './screens/orderScreen';
import DetailOrderScreen from './screens/detailOrderScreen';
import PaymentScreen from './screens/paymentScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="detail" component={DetailScreens} />
        <Stack.Screen name="cart" component={CartScreen} />
        {/*  */}
        <Stack.Screen name="order" component={OrderScreen} />
        <Stack.Screen name="payment" component={PaymentScreen} />
        <Stack.Screen name="detailOrder" component={DetailOrderScreen} />

        {/* accounts */}
        <Stack.Screen name="account" component={ProfileScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="editProfile" component={EditProfile} />
        <Stack.Screen name="editAddress" component={AddAddress} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
