import axios from 'axios';

const getResponse = async resources => {
  const data = await axios.get(`http://10.0.2.2:3500/api/${resources}?key=a`);
  return data.data;
};

export {getResponse};
