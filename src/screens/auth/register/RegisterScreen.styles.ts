import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  keyboardScrollContainer: {
    flexGrow: 1,
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
    zIndex: 100,
    width: '100%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: 20,
  },
  signUp: {
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
    flex: 1,
    marginLeft: -30,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: colors.input,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
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
  gradientButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    marginVertical: 20,
    color: colors.black,
    fontSize: 14,
  },
  link: { color: colors.link, fontWeight: 'bold', marginLeft: 5 },
  errorStyle: {
    color: colors.darkRed,
    alignSelf: 'center',
    marginTop: -5,
    fontWeight: '700',
  },
});
