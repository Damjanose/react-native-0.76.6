import { useContext } from 'react';
import { LocationContext } from '../LocationProvider';

export default () => {
  const contextValue = useContext(LocationContext);

  if (!contextValue) {
    throw new Error('Please make sure your component tree is wrapped with LocationProvider component');
  }

  return contextValue;
};
