import {View, Text, ScrollView} from 'react-native';
import Navbar from '../components/navbar';
import Card from '../components/card';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <Navbar nav={navigation} />
      <ScrollView>
        <Card nav={navigation} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
