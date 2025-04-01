import { Dispatch, ReactNode, SetStateAction } from 'react';
import { LoginPayload } from '../services/auth/types';

export type TSnackbarConfig = {
  message: string;
  duration?: number;
  theme?: any;
  visible: boolean;
};
type TSnackbarAction = (message: string, duration?: number) => void;

export type TSnackbarProvider = {
  snackbarState: TSnackbarConfig;
  showSnackBar: TSnackbarAction;
  showSuccessSnackbar: TSnackbarAction;
  showWarningSnackbar: TSnackbarAction;
  showErrorSnackbar: TSnackbarAction;
};

export type TBarStyle = 'light-content' | 'dark-content';
export type TStatusBarContext = {
  isDarkMode: boolean;
  setAsOSSettings: () => void;
  setToDark: () => void;
  setToLight: () => void;
};

export type TAuthContext = {
  isSigningIn: boolean;
  isSignedIn: boolean;
  isLoading: boolean;
  userId: string;
  userName: string;
  login: (LoginPayload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
  getError: (key: keyof LoginPayload) => string | undefined;
  clearFieldError: (key: string) => void;
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
};

export interface Props {
  children?: ReactNode;
}

export type TLocationContext = {
  permissionGranted: boolean | null;
  location: { longitude: number; latitude: number } | null;
  error: string | null;
  shouldFetchLocation: boolean;
  setShouldFetchLocation: (value: boolean) => void;
};
