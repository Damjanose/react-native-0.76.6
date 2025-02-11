import React, { useCallback, useState, useMemo, createContext } from 'react'
import { Snackbar } from 'react-native-paper'
import { StyleSheet, Dimensions } from 'react-native'
// types
import { Props } from '../types'
import { TSnackbarConfig, TSnackbarProvider } from './types'
import C from '../styles/colors'

const bottom = Dimensions.get('screen').height / 1.2
const { snackbarStyle } = StyleSheet.create({ snackbarStyle: { bottom } })
const theme = { colors: { surface: C.black, accent: C.black, onSurface: C.white }, roundness: 20 }
const successTheme = { colors: { surface: C.white, accent: C.white, onSurface: C.success }, roundness: 20 }
const warningTheme = { colors: { surface: C.white, accent: C.white, onSurface: C.warning }, roundness: 20 }
const errorTheme = { colors: { surface: C.white, accent: C.white, onSurface: C.error }, roundness: 20 }

export const SnackbarContext = createContext<TSnackbarProvider | null>(null)

export const SnackBarProvider = ({ children }: Props) => {
  const [snackbarState, setSnackbarState] = useState<TSnackbarConfig>({ message: '', duration: 3000, visible: false })
  const showSnackBar = useCallback((message: string, duration?: number) => {
    setSnackbarState({ message, duration, theme, visible: true })
  }, [])
  const showSuccessSnackbar = useCallback((message: string, duration?: number) => {
    setSnackbarState({ message, duration, theme: successTheme, visible: true })
  }, [])
  const showWarningSnackbar = useCallback((message: string, duration?: number) => {
    setSnackbarState({ message, duration, theme: warningTheme, visible: true })
  }, [])
  const showErrorSnackbar = useCallback((message: string, duration?: number) => {
    setSnackbarState({ message, duration, theme: errorTheme, visible: true })
  }, [])

  const SnackbarContextValue = useMemo(
    () => ({
      snackbarState,
      showSnackBar,
      showSuccessSnackbar,
      showWarningSnackbar,
      showErrorSnackbar,
    }),
    [showErrorSnackbar, showSnackBar, showSuccessSnackbar, showWarningSnackbar, snackbarState],
  )

  const hideSnackBar = useCallback(() => {
    setSnackbarState({ message: '', visible: false, duration: 300 })
  }, [])

  return (
    <SnackbarContext.Provider value={SnackbarContextValue}>
      <>{children}</>
      <Snackbar
        style={snackbarStyle}
        theme={snackbarState.theme}
        action={{ label: 'ok', onPress: hideSnackBar }}
        onDismiss={hideSnackBar}
        visible={snackbarState.visible}
        duration={snackbarState.duration}>
        {snackbarState?.message}
      </Snackbar>
    </SnackbarContext.Provider>
  )
}
