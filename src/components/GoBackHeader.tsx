import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { NavigationScreensPropTypes } from '../types/navigation'
import { CardTitle } from './Cards/FullScreenCard'
import useBlackOrWhite from '../hooks/useBlackOrWhite'

type Props = {
  handleOnNavigate?: () => void
  title?: string
}

export default ({ handleOnNavigate, title }: Props) => {
  const { goBack } = useNavigation<NavigationScreensPropTypes>()
  const { whiteOrBlack, blackOrWhite: backgroundColor } = useBlackOrWhite()
  const styles = StyleSheet.create({
    title: { flex: 1, marginTop: -4 },
    container: { flexDirection: 'row', backgroundColor, zIndex: 1000000000 },
  })

  return (
    <TouchableOpacity onPress={handleOnNavigate ? handleOnNavigate : goBack} style={styles.container}>
      <MCIcon color={whiteOrBlack} size={40} name="chevron-left" />
      <CardTitle title={title} style={styles.title} />
    </TouchableOpacity>
  )
}
