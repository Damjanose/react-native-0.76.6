import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
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
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 20,
    color: '#000',
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
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 50,
    width: 40,
  },
  otpPinCodeText: {
    fontSize: 18,
    color: '#000',
  },
  otpFocusStick: {
    backgroundColor: '#3498db',
  },
  otpFocusedPinCodeContainer: {
    borderColor: '#3498db',
  },
  button: {
    backgroundColor: '#000',
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginVertical: 20,
    color: '#000',
    fontSize: 14,
  },
  link: { color: '#3498db', fontWeight: 'bold', marginLeft: 5 },
  topTitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    flex: 1,
    marginLeft: -30,
  },
});
