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
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 20,
    color: colors.black,
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
  footerText: {
    marginVertical: 20,
    color: colors.black,
    fontSize: 14,
    marginTop: 40,
  },
  link: { color: colors.link, fontWeight: 'bold', marginLeft: 5 },
  errorStyle: {
    color: colors.darkRed,
    alignSelf: 'center',
    marginTop: -5,
    fontWeight: '700',
  },
  header: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 20,
    borderTopRightRadius: 0,
  },
  innerLogo: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
});
