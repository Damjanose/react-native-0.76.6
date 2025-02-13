import { isIOS } from '../../../utils/device.ts';

export const ICONS = [
  {
    title: 'Home',
    active: require('@assets/images/home.png'),
    inactive: require('@assets/images/home.png'),
  },
  {
    title: 'Reservation',
    active: require('@assets/images/taxi.png'),
    inactive: require('@assets/images/taxi.png'),
  },
  {
    title: 'Profile',
    active: require('@assets/images/user.png'),
    inactive: require('@assets/images/user.png'),
  },
];

export const shadow = {
  shadowColor: 'black',
  shadowOpacity: 0.1,
  shadowRadius: 8,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  borderWidth: isIOS ? 0 : 1,
  borderColor: '#e7e7e7',
};
