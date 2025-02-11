import { useState } from 'react';

export type Errors<T extends Record<string, any>> = Record<keyof T, Array<string>>;

export const useErrors = <T extends Record<string, any>>() => {
  const [errors, setE] = useState<Errors<T>>({} as Record<keyof T, Array<string>>);

  const setErrors = (passedErrors: Errors<T> = {} as Record<keyof T, Array<string>>) => {
    setE(passedErrors);
  };

  const clearFieldError = (key: string) => {
    if (key) {
      delete errors[key];
    }
    setErrors(errors);
  };

  const clearErrors = () => {
    setErrors({} as Record<keyof T, Array<string>>);
  };

  const clearLikeError = (key: string) => {
    Object.keys(errors).forEach((eKey: string) => {
      if (eKey.includes(key)) {
        clearFieldError(eKey);
      }
    });
  };

  const getError = (key: keyof T) => (errors[key] ? errors[key].join(' ') : undefined);

  const getLikeError = (key: string) => {
    const likeErrorKey = Object.keys(errors).find(eKey => eKey.includes(key));
    return likeErrorKey ? getError(likeErrorKey as keyof T) : undefined;
  };

  return { getError, getLikeError, setErrors, clearFieldError, clearErrors, clearLikeError };
};
