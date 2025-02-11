import { useContext } from 'react';
import { SnackbarContext } from '../SnackBarProvider';

export default () => {
  const contextValue = useContext(SnackbarContext);

  if (!contextValue) {
    throw new Error('Please make sure your component tree is wrapped with SnackBarProvider component');
  }

  return contextValue;
};
