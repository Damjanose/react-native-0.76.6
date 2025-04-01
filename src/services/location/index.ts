import { LocationPayload } from './types';
import APIClient from '../client/APIClient';

export const RequestTaxi = {
  searchClosestTaxi(payload: LocationPayload) {
    return APIClient().post(`calculate-drivers/${payload.latitude}/${payload.longitude}`);
  },
};
