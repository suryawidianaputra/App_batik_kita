import axios from 'axios';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import {styles} from '../styles/profileOptoins';

const ProfileOptions = ({nav}) => {
  return (
    <>
      <View style={{height: 10}}></View>
      <View style={{width: '100%', alignItems: 'center', gap: 10}}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => nav.navigate('editAddress')}>
          <Text style={styles.text}>Alamat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>Ganti Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>Keranjang</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProfileOptions;
