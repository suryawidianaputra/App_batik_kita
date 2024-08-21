import AsyncStorage from '@react-native-async-storage/async-storage';

let isLogin = false;
let isCanOrder = false;

const Get = async key => {
  try {
    const items = await AsyncStorage.getItem(key);
    return items ? items : {message: 'Error'};
  } catch (error) {
    console.log(error);
  }
};

const Set = async (key, value) => {
  try {
    const items = await AsyncStorage.setItem(key, value);
    return items ? items : {message: 'Error'};
  } catch (error) {
    console.log(error);
  }
};

const Delete = async key => {
  try {
    const items = await AsyncStorage.setItem(key);
    return items ? items : {message: 'Error'};
  } catch (error) {
    console.log(error);
  }
};

const Authentication = async () => {
  if (
    (await Get('isLogin')) === 'true' &&
    (await Get('userName')) !== null &&
    (await Get('email')) !== null
  )
    return (isLogin = true);
  else {
    return (isLogin = false);
  }
};

const canOrder = async () => {
  if (
    (await Get('address')) === 'true' &&
    (await Get('note')) !== null &&
    (await Get('phone')) !== null
  )
    return (isCanOrder = true);
  else {
    return (isCanOrder = false);
  }
};

async function a() {
  console.log(await Get('userName'));
  console.log(await Get('email'));
  console.log(await Get('isLogin'));
}

export {Get, Set, Delete, Authentication, isLogin, isCanOrder};
