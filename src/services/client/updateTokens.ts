import {
  clearAccessTokenFromEncryptedStorage,
  clearRefreshTokenFromEncryptedStorage,
  getAccessTokenFromEncryptedStorage,
  getRefreshTokenFromEncryptedStorage,
  setAccessTokenInEncryptedStorage,
  setRefreshTokenInEncryptedStorage,
} from '../../store/auth/token';
import axios, { AxiosRequestHeaders } from 'axios';
// @ts-ignore
// import { REACT_APP_BASE_URL } from '@env';

const updateTokens = async (): Promise<void> => {
  try {
    const accessToken = await getAccessTokenFromEncryptedStorage();
    const RefreshToken = (await getRefreshTokenFromEncryptedStorage()) as string;

    // @ts-ignore
    const headers: AxiosRequestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      RefreshToken,
    };
    // @ts-ignore
    const baseURL = '';

    const { data } = await axios.post('/refreshtoken', {}, { headers, baseURL });
    if (data) {
      await setAccessTokenInEncryptedStorage(data.data.access_token);
      await setRefreshTokenInEncryptedStorage(data.data.refresh_token);
    }
  } catch (e) {
    await clearAccessTokenFromEncryptedStorage();
    await clearRefreshTokenFromEncryptedStorage();
  }
};

export default updateTokens;
