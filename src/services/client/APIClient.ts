import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import {
  clearAccessTokenFromEncryptedStorage,
  clearRefreshTokenFromEncryptedStorage,
  getAccessTokenFromEncryptedStorage,
} from '../../store/auth/token';
import updateTokens from './updateTokens.ts';
// @ts-ignore
// import { REACT_APP_BASE_URL } from '@env';

const options = {
  baseURL: '',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  },
};

const axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use(
  async config => {
    try {
      let accessToken = await getAccessTokenFromEncryptedStorage();

      if (accessToken) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${accessToken || ''}`,
        } as AxiosRequestHeaders;
      }

      return config;
    } catch (error) {
      console.error('Error in request interceptor:', error);
      return Promise.reject(error);
    }
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      try {
        await updateTokens();
        const updatedAccessToken = await getAccessTokenFromEncryptedStorage();
        error.config.headers.Authorization = `Bearer ${updatedAccessToken}`;
        return axios(error.config).catch(async response => {
          if (response.response.status === 401) {
            await clearAccessTokenFromEncryptedStorage();
            await clearRefreshTokenFromEncryptedStorage();
          }
          return Promise.reject(response);
        });
      } catch (e) {
        console.error('Error during token update:', e);
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  },
);

export default (): AxiosInstance => {
  return axiosInstance;
};
