import EncryptedStorage from 'react-native-encrypted-storage';
import { ACCESS_TOKEN, LOCATION_DATA, REFRESH_TOKEN } from '../../constants/auth';

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
  await EncryptedStorage.setItem(ACCESS_TOKEN, token);
};

export const clearAccessTokenFromEncryptedStorage = async (): Promise<void> => {
  const AT = await getAccessTokenFromEncryptedStorage();
  if (AT) {
    await EncryptedStorage.removeItem(ACCESS_TOKEN);
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
  await EncryptedStorage.setItem(REFRESH_TOKEN, token);
};

export const clearRefreshTokenFromEncryptedStorage = async (): Promise<void> => {
  const RT = await getRefreshTokenFromEncryptedStorage();
  if (RT) {
    await EncryptedStorage.removeItem(REFRESH_TOKEN);
  }
};

export const clearLocationFromEncryptedStorage = async (): Promise<void> => {
  try {
    const location = await getLocationFromEncryptedStorage();
    if (location) {
      await EncryptedStorage.removeItem(LOCATION_DATA);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getLocationFromEncryptedStorage = async (): Promise<string | void> => {
  try {
    const location = await EncryptedStorage.getItem(LOCATION_DATA);
    return location || '';
  } catch (e) {
    return '';
  }
};
