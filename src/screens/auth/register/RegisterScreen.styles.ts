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
    color: '#fff',
    textAlign: 'center',
    flex: 1,
    marginLeft: -30,
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
  gradientButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    marginVertical: 20,
    color: '#000',
    fontSize: 14,
  },
  link: { color: '#3498db', fontWeight: 'bold', marginLeft: 5 },
  errorStyle: {
    color: '#b20000',
    alignSelf: 'center',
    marginTop: -5,
    fontWeight: '700',
  },
});
