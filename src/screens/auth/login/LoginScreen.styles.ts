import { StyleSheet } from 'react-native';

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
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    marginTop: -20,
    paddingTop: 30,
    paddingBottom: 40,
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
  input: {
    height: 50,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
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
    marginTop: 40,
  },
  link: { color: '#3498db', fontWeight: 'bold', marginLeft: 5 },
  errorStyle: {
    color: '#b20000',
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
    backgroundColor: '#fff',
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
