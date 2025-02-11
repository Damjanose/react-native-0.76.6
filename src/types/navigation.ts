import { NavigationProp } from '@react-navigation/core/src/types'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type ScreenPropsTypes = {
  Drawer: undefined
  NewJobScreen: { job_id: string | number }
  CreateNewJobScreen: undefined
  JobDetailsScreen: { job_id: string | number }
}

export type NavigationScreensPropTypes = NavigationProp<ScreenPropsTypes>

export type Props<TScreenName extends keyof ScreenPropsTypes> = NativeStackScreenProps<ScreenPropsTypes, TScreenName>
