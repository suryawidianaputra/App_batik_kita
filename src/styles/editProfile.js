import {StyleSheet} from 'react-native';
import {cssVariable} from './cssVariable';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: cssVariable.colors.light,
  },
  containerG: {
    backgroundColor: cssVariable.colors.orange,
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: cssVariable.colors.white,
    margin: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: 'white',
    padding: 5,
  },
  containerData: {
    marginLeft: 10,
    gap: 10,
    marginBottom: 10,
  },
  textData: {
    fontSize: 18,
    color: cssVariable.colors.white,
  },
  saveButton: {
    backgroundColor: cssVariable.colors.orange,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: cssVariable.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
