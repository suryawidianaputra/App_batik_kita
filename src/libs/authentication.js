import AsyncStorage from '@react-native-async-storage/async-storage';

let isLogin = false;
let isCanOrder = false;

const Get = async key => {
  try {
    const items = await AsyncStorage.getItem(key);
    return items !== null ? items : null;
  } catch (error) {
    console.log(`Error getting key ${key}:`, error);
    return null;
  }
};

const Set = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.log(`Error setting key ${key}:`, error);
    return false;
  }
};

const Delete = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log(`Error deleting key ${key}:`, error);
    return false;
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
  return isLogin;
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
  return isCanOrder;
};

async function debug() {
  console.log('Username:', await Get('userName'));
  console.log('Email:', await Get('email'));
  console.log('Login Status:', await Get('isLogin'));
  console.log('account_id:', await Get('account_id'));
}

export {Get, Set, Delete, Authentication, isLogin, isCanOrder, debug};
