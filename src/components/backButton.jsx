import {View, TouchableOpacity} from 'react-native';
import {cssVariable} from '../styles/cssVariable';

export default function BackButton({nav}) {
  return (
    <TouchableOpacity onPress={() => nav.goBack()}>
      <View
        style={{
          width: 18,
          height: 18,
          marginLeft: 10,
          borderLeftWidth: 3,
          borderBottomWidth: 3,
          borderColor: cssVariable.colors.orange,
          transform: [{rotate: '45deg'}],
          zIndex: 9999,
          top: 0,
        }}></View>
    </TouchableOpacity>
  );
}
