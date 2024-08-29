import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/editProfile';
import {Get} from '../libs/authentication';
import axios from 'axios';
import BackButton from '../components/backButton';
import * as ImagePicker from 'react-native-image-picker';

const EditProfile = ({navigation, route}) => {
  const [email, setEmail] = useState(null);
  const [datas, setDatas] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const {data} = route.params;

  useEffect(() => {
    setEmail(data);

    const fetchData = async () => {
      setEmail(await Get('email'));
      const response = await axios.get(
        `http://10.0.2.2:3550/api/users/profile/${email}?key=a`,
      );
      setDatas(response.data.data);
      setProfileImage(response.data.data.profilePitcure);
    };
    fetchData();
  }, [email, data]);

  const handleSave = async () => {
    try {
      const updatedData = {
        username: datas.username,
        profilePicture: profileImage,
      };
      await axios.patch(
        `http://10.0.2.2:3550/api/users/profile/${email}`,
        updatedData,
      );
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleImageChange = async () => {
    try {
      const result = await ImagePicker.launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
      });

      if (result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;

        const formData = new FormData();
        formData.append('image', {
          uri: imageUri,
          type: 'image/jpeg',
          name: 'profile.jpg',
        });
        // console.log('FormData:', formData._parts);

        const uploadResponse = await axios.patch(
          `http://10.0.2.2:3550/api/users/picture/${email}?key=a`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        console.log('HHHHHH');
        console.log('Upload Response:', uploadResponse.data);
        setProfileImage(uploadResponse.data.profilePicture);
      }
    } catch (error) {
      console.error('Failed to change profile image:', error);
    }
  };

  return (
    <>
      <View style={{position: 'absolute', marginTop: 10, marginLeft: 5}}>
        <BackButton nav={navigation} />
      </View>
      <View style={styles.container}>
        <View style={styles.containerG}>
          <Text style={styles.title}>Edit Profile</Text>

          <TouchableOpacity onPress={handleImageChange}>
            <Image
              source={
                profileImage
                  ? {uri: `http://10.0.2.2:3550/${profileImage}`}
                  : require('../assets/icons/account.png')
              }
              style={styles.profileImage}
            />
          </TouchableOpacity>

          <View style={styles.containerData}>
            <Text style={styles.textData}>Username: {datas.username}</Text>
            <Text style={styles.textData}>Email: {datas.email}</Text>
            <Text style={styles.textData}>
              Alamat:{' '}
              {datas.address !== null ? datas.address : 'Belum terdaftar'}
            </Text>
            <Text style={styles.textData}>
              Nomer telepon:{' '}
              {datas.phoneNumber !== null
                ? datas.phoneNumber
                : 'Belum terdaftar'}
            </Text>
            <Text style={styles.textData}>
              Catatan: {datas.note !== null ? datas.note : 'Belum terdaftar'}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Simpan Perubahan</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EditProfile;
