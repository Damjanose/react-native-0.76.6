import { Dimensions, StyleSheet } from 'react-native';
import { blue_6, gray } from '../../styles/colors';
// import { InterRegular } from '@app/styles/fonts';
const { width, height } = Dimensions.get('window');
const makeStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
    },
    inputTitle: {
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
      color: gray,
      marginBottom: 2,
      marginVertical: 10,
    },
    inputContainer: {
      borderRadius: 10,
      padding: 12,
      paddingRight: 0,
      height: 40 + height / 50,
      backgroundColor: '#F2F4F8',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
    },
    largeTextArea: {
      height: 120,
      alignItems: 'flex-start',
      padding: 0,
      paddingHorizontal: 12,
    },
    searchTextArea: {
      borderWidth: 1,
      borderRadius: 10,
      borderStyle: 'solid',
      borderColor: '#DEDCDC',
      backgroundColor: gray,
    },
    textArea: {
      height: 72,
      alignItems: 'flex-start',
      padding: 0,
      paddingHorizontal: 12,
    },
    disabledColor: {
      backgroundColor: gray,
    },
    inputStyle: {
      flexGrow: 1,
      minHeight: 48,
      fontWeight: '500',
      fontSize: 18,
      fontFamily: 'Inter',
      color: gray,
      // fontFamily: InterRegular,
    },

    iconSpace: {
      marginRight: 10.5,
    },
    iconEnd: {
      paddingRight: 15,
    },
    isFocused: {
      borderColor: blue_6,
      elevation: 2,
      shadowColor: blue_6,
    },
    errorText: {
      // fontFamily: InterRegular,
      fontSize: 13,
      lineHeight: 16,
      color: red_6,
      marginLeft: 10,
      marginTop: 5,
    },
    labelContainer: {
      flexDirection: 'row',
    },
    requieredAsterix: {
      color: red_6,
      marginRight: 4,
    },
    errorBorderColor: {
      borderColor: red_6,
    },
    helperTextContainer: {
      flexDirection: 'row',
      marginLeft: 10,
      marginTop: 5,
    },
    helperText: {
      // fontFamily: InterRegular,
      fontSize: 13,
      lineHeight: 18,
      color: gray,
      marginLeft: 5,
    },

    descriptionContainer: {
      marginVertical: 4,
    },
    description: {
      // fontFamily: InterRegular,
      fontSize: 12,
      lineHeight: 16,
      color: gray,
    },
    buttonText: {
      // fontFamily: InterRegular,
      fontSize: 14,
      lineHeight: 24,
      color: 'red',
    },
    buttonStyle: {
      backgroundColor: gray,
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 1,
      borderColor: gray,
      height: 46,
      flexGrow: 0,
      paddingHorizontal: 5,
    },
    clearableButton: {
      marginRight: 10,
    },
  });

export default makeStyles;
