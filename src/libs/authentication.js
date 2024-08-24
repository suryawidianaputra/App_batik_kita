import AsyncStorage from '@react-native-async-storage/async-storage';

let isLogin = false;
let isCanOrder = false;

const Get = async key => {
  try {
    const items = await AsyncStorage.getItem(key);
    return items !== null ? items : null; // Mengembalikan null jika tidak ditemukan
  } catch (error) {
    console.log(`Error getting key ${key}:`, error);
    return null;
  }
};

const Set = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true; // Mengembalikan true jika berhasil
  } catch (error) {
    console.log(`Error setting key ${key}:`, error);
    return false; // Mengembalikan false jika ada error
  }
};

const Delete = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true; // Mengembalikan true jika berhasil
  } catch (error) {
    console.log(`Error deleting key ${key}:`, error);
    return false; // Mengembalikan false jika ada error
  }
};

const Authentication = async () => {
  const loginStatus = await Get('isLogin');
  const userName = await Get('userName');
  const email = await Get('email');

  if (loginStatus === 'true' && userName && email) {
    isLogin = true;
  } else {
    isLogin = false;
  }
  return isLogin; // Mengembalikan status otentikasi
};

const canOrder = async () => {
  const address = await Get('address');
  const note = await Get('note');
  const phone = await Get('phone');

  if (address && note && phone) {
    isCanOrder = true;
  } else {
    isCanOrder = false;
  }
  return isCanOrder; // Mengembalikan status order
};

async function debug() {
  console.log('Username:', await Get('userName'));
  console.log('Email:', await Get('email'));
  console.log('Login Status:', await Get('isLogin'));
}

export {Get, Set, Delete, Authentication, isLogin, isCanOrder, debug};
