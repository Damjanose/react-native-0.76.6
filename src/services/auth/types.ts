import type { StatusResponse } from '../types';

export type AuthData = {
  access_token: string;
  refresh_token: string;
  user: {
    email: string;
    id: string;
    username: string;
    roles: {};
  };
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginResponse = StatusResponse<AuthData>;
