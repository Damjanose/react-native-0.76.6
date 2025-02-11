import React from 'react';
import { Image } from 'react-native';
import { Logo } from '../assets/images';

export default () => (
  <Image source={Logo} style={{ alignSelf: 'center' }} resizeMode='center' />
)
