import {View, Text, Image} from 'react-native';
import {styles} from '../styles/comments';

const Comments = ({data}) => {
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        {data.length == 0 ? (
          <>
            {data?.map((el, i) => (
              <View style={styles.containerComments} key={i}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../assets/icons/user.png')}
                    style={styles.userIcon}
                  />
                  <Text style={styles.userName}>{el.email}</Text>
                </View>
                <Text style={styles.comment}>{el.comments}</Text>
              </View>
            ))}
          </>
        ) : (
          <View>
            <Text style={{fontSize: 18}}>Belum ada komentar</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Comments;
