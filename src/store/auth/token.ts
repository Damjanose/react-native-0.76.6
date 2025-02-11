import EncryptedStorage from 'react-native-encrypted-storage';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants/auth';

export const getAccessTokenFromEncryptedStorage = async (): Promise<string | void> => {
  try {
    const token = await EncryptedStorage.getItem(ACCESS_TOKEN);
    if (token) {
      return token;
    }
    return '';
  } catch (e) {
    return '';
  }
};

export const setAccessTokenInEncryptedStorage = async (token: string): Promise<void> => {
  try {
    await EncryptedStorage.setItem(ACCESS_TOKEN, token);
  } catch (e) {
    console.log(e, 'aa');
  }
};

export const clearAccessTokenFromEncryptedStorage = async (): Promise<void> => {
  try {
    const AT = await getAccessTokenFromEncryptedStorage();
    if (AT) {
      await EncryptedStorage.removeItem(ACCESS_TOKEN);
    }
  } catch (e) {
    console.log(e, 'aaaa');
  }
};

export const getRefreshTokenFromEncryptedStorage = async (): Promise<string | void> => {
  try {
    const token = await EncryptedStorage.getItem(REFRESH_TOKEN);
    if (token) {
      return token;
    }
    return '';
  } catch (e) {
    return '';
  }
};

export const setRefreshTokenInEncryptedStorage = async (token: string): Promise<void> => {
  try {
    await EncryptedStorage.setItem(REFRESH_TOKEN, token);
  } catch (e) {
    console.log(e, 'aaaq');
  }
};

export const clearRefreshTokenFromEncryptedStorage = async (): Promise<void> => {
  try {
    const RT = await getRefreshTokenFromEncryptedStorage();
    if (RT) {
      await EncryptedStorage.removeItem(REFRESH_TOKEN);
    }
  } catch (e) {
    console.log(e, 'as');
  }
};
