import React, { createContext, useEffect, useState } from 'react';
import Geolocation, { GeolocationError, GeolocationResponse } from '@react-native-community/geolocation';
import { requestTrackingPermission } from 'react-native-tracking-transparency';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Props, TLocationContext } from './types';
import { LOCATION_DATA } from '../constants/auth';

export const LocationContext = createContext<TLocationContext | null>(null);

export const LocationProvider: React.FC<Props> = ({ children }) => {
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);
  const [shouldFetchLocation, setShouldFetchLocation] = useState<boolean>(false);
  const [location, setLocation] = useState<{ longitude: number; latitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const requestLocationPermission = async () => {
    Geolocation.requestAuthorization();
    const trackingStatus = await requestTrackingPermission();
    if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
      setPermissionGranted(true);
      setShouldFetchLocation(true);
    } else {
      setPermissionGranted(false);
    }
  };

  const fetchLocation = () => {
    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => {
        const { longitude, latitude } = position.coords;
        setLocation({ longitude, latitude });
        AsyncStorage.setItem(LOCATION_DATA, JSON.stringify({ longitude, latitude }));
      },
      (err: GeolocationError) => {
        setError(err.message);
        console.error('GetCurrentPosition Error', err);
      },
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (shouldFetchLocation) {
      fetchLocation();
      setShouldFetchLocation(false);
    }
  }, [shouldFetchLocation]);

  return (
    <LocationContext.Provider
      value={{
        permissionGranted,
        location,
        error,
        shouldFetchLocation,
        setShouldFetchLocation,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
