import React, { createContext, useCallback, useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import Colors from '../styles/colors';
import { Props, TBarStyle, TStatusBarContext } from './types';

export const StatusBarContext = createContext<TStatusBarContext | null>(null);

export const StatusBarProvider = ({ children }: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [contentMode, setContentMode] = useState<TBarStyle>();
  const [backGroundColor, setBackGroundColor] = useState<string>();

  const setToLight = () => {
    setContentMode('dark-content');
    setBackGroundColor(Colors.white);
  };

  const setToDark = () => {
    setContentMode('light-content');
    setBackGroundColor(Colors.black);
  };

  const setAsOSSettings = useCallback(() => {
    isDarkMode ? setToDark() : setToLight();
  }, [isDarkMode]);

  useEffect(() => {
    setAsOSSettings();
  }, [isDarkMode, setAsOSSettings]);

  return (
    <StatusBarContext.Provider value={{ setToDark, setToLight, isDarkMode, setAsOSSettings }}>
      <StatusBar animated barStyle={contentMode} backgroundColor={backGroundColor} translucent />
      <>{children}</>
    </StatusBarContext.Provider>
  );
};
