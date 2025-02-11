import { StyleSheet } from 'react-native'

export const { card, headerWrapper, title, grey, textCenter } = StyleSheet.create({
  card: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: { fontSize: 20, marginBottom: 5 },
  grey: { color: 'grey' },
  textCenter: { textAlign: 'center' },
})
