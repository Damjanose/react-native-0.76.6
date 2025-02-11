import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dropdown: {
    borderRadius: 10,
    height: 40 + height / 50,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    borderBottomWidth: 0.25
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#8f8f8f',
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 15,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 10,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: '#C0C0C0',
    marginBottom: 2,
    marginVertical: 10,
  },
  labelContainer: {
    flexDirection: 'row',
  },
  requieredAsterix: {
    color: '#FF5252',
    marginRight: 4,
  },
  errorText: {
    fontSize: 13,
    lineHeight: 16,
    color: '#FF5252',
    marginLeft: 10,
    marginTop: 5,
  },
});
