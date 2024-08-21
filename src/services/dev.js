import {removeData} from '../libs/asyncStorage';

async function deleteAsyncData() {
  await removeData('userName');
  await removeData('email');
  await removeData('isLogin');
}

export {deleteAsyncData};
