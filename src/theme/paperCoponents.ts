import colors from '../styles/colors'

export const theme: import('@callstack/react-theme-provider').$DeepPartial<ReactNativePaper.Theme> | undefined = {
  dark: false,
  colors,
  roundness: 15,
}
