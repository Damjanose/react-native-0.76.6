import APIClient from '../client/APIClient';
import { LoginPayload, LoginResponse } from './types';
import { StatusResponse } from '../types';

const AuthService = {
  login(payload: LoginPayload): Promise<LoginResponse> {
    return APIClient().post('/login', payload);
  },
  logout(): Promise<StatusResponse<unknown>> {
    return APIClient().post('/logout', { timeout: 3000 });
  },
};

export default AuthService;
