import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from '../styles/comments';

const Comments = ({data}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      {/* {data.length == 0 ? ( */}
      <>
        {data?.data.map((el, i) => (
          <View style={styles.containerComments}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/user.png')}
                style={styles.userIcon}
              />
              <Text style={styles.userName}>Widiana</Text>
            </View>
            <Text style={styles.comment}>Barangnya masih ada?</Text>
          </View>
        ))}
      </>
      {/* ) : (
        <View>
          <Text></Text>
        </View>
      )} */}
    </View>
  );
};

export default Comments;
