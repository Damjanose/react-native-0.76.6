import { useState } from 'react';
import { useErrors } from '../../hooks/useErrors';
import { RequestTaxi } from '../location';
import { LocationPayload } from '../location/types';

export default () => {
  const [isFinding, setIsFinding] = useState(false);
  const { getError, setErrors, clearFieldError } = useErrors();
  const [message, setMessage] = useState('');

  const searchClosestTaxi = async (location: LocationPayload) => {
    setIsFinding(true);
    try {
      const { data } = await RequestTaxi.searchClosestTaxi(location);
      if (data.data) {
        setMessage(data.data[0].message);
      }
    } catch (e: any) {
      console.error(e);

      setErrors(e.response.data.errors);
    } finally {
      setIsFinding(false);
    }
  };

  return { searchClosestTaxi, getError, clearFieldError, isFinding, message };
};
