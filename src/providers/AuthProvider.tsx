import React, { createContext, useEffect, useState } from 'react';
import { Props, TAuthContext } from './types';
import { getAccessTokenFromEncryptedStorage } from '../store/auth/token';
import { LoginPayload } from '../services/auth/types';
import { useErrors } from '../hooks/useErrors';
import useSnackbar from './hooks/useSnackbar';

const initialContextValue: TAuthContext = {
  isLoading: false,
  isSigningIn: false,
  isSignedIn: false,
  userId: '',
  userName: '',
  login: async ({}: LoginPayload) => {},
  logout: async () => {},
  getError: () => undefined,
  clearFieldError: () => {},
  setIsSignedIn: () => {},
};

export const AuthContext = createContext(initialContextValue);

export const AuthProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const { getError, setErrors, clearFieldError } = useErrors<LoginPayload>();
  const { showErrorSnackbar } = useSnackbar();

  const isLoggedInCheck = async () => {
    try {
      setIsSigningIn(true);
      const AT = await getAccessTokenFromEncryptedStorage();
      if (AT) {
        setIsSignedIn(true);
      }
      setIsSigningIn(false);
    } catch (e) {
      console.log(e, 'e');
    }
  };

  const login = async (payload: LoginPayload) => {
    console.log(payload);
    setIsLoading(true);
    try {
      // const { data } = await AuthService.login(payload);
      //   if (data.data.access_token) {
      //     setIsSigningIn(true);
      //     await setAccessTokenInEncryptedStorage(data.data.access_token);
      //     await setRefreshTokenInEncryptedStorage(data.data.refresh_token);
      //     setIsSignedIn(true);
      //     setIsSigningIn(false);
      //   }
      //   if (data.data.user.id) {
      //     const user_id_to_string = data.data.user.id.toString();
      //     setUserId(user_id_to_string);
      setUserId('1');
      //   }
      //   if (data.data.user.username) {
      //     setUserName(data.data.user.username);
      setUserName('test');
      //   }
    } catch (e: any) {
      //   console.error(e);
      showErrorSnackbar(e.response.data.message);
      setErrors(e.response.data.errors);
    } finally {
      setIsLoading(false);
      //
      //   //remove after test
      //   setIsSigningIn(true);
    }
    setIsSignedIn(true);
  };

  const logout = async () => {
    // try {
    //   setIsSigningIn(true);
    //
    //   await AuthService.logout();
    // } catch (e) {
    //   console.error('logout error:', e);
    // } finally {
    //   await clearAccessTokenFromEncryptedStorage();
    //   await clearRefreshTokenFromEncryptedStorage();
    //   setUserId('');
    //   setUserName('');
    //   setIsSignedIn(false);
    //   setIsSigningIn(false);
    // }
    setIsSignedIn(false);
  };

  useEffect(() => {
    isLoggedInCheck();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isSigningIn,
        isSignedIn,
        login,
        logout,
        isLoading,
        getError,
        clearFieldError,
        userId,
        userName,
        setIsSignedIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
