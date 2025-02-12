import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    marginTop: -20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  header: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: 20,
  },
  logo: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 20,
    color: colors.black,
  },
  inputContainer: {
    width: '80%',
  },
  otpContainer: {
    width: '100%',
  },
  otpInputsContainer: {
    justifyContent: 'space-between',
  },
  otpPinCodeContainer: {
    borderWidth: 1,
    borderColor: colors.input,
    borderRadius: 10,
    backgroundColor: colors.white,
    height: 50,
    width: 40,
  },
  otpPinCodeText: {
    fontSize: 18,
    color: colors.black,
  },
  otpFocusStick: {
    backgroundColor: colors.link,
  },
  otpFocusedPinCodeContainer: {
    borderColor: colors.link,
  },
  button: {
    backgroundColor: colors.black,
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginVertical: 20,
    color: '#000',
    fontSize: 14,
  },
  link: { color: colors.link, fontWeight: 'bold', marginLeft: 5 },
  topTitle: {
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
    flex: 1,
    marginLeft: -30,
  },
});
