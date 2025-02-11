import { ReactElement } from 'react';
import { TextInputProps } from 'react-native';

export interface TextFieldProps {
  autoFocus?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  label?: string;
  value?: string | number;
  placeholder?: string;
  iconStart?: ReactElement;
  iconEnd?: ReactElement;
  secondIconEnd?: ReactElement;
  helperText?: string;
  errorText?: string | ReactElement;
  OnChange?: (text: string) => void;
  notEditable?: boolean;
  onButtonPress?: () => void;
  onSubmitEditing?: () => void;
  onKeyPress?: (e: any) => void;
  onPressIn?: () => void;
  buttonContent?: string | ReactElement;
  buttonFilled?: boolean;
  size?: string;
  required?: boolean;
  passwordVisible?: boolean;
  description?: string;
  isoCode?: string;
  hasFlag?: boolean;
  largeTextArea?: boolean;
  searchTextArea?: boolean;
  textArea?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  extraStyles?: {
    width?: any;
    marginBottom?: number;
  };
  placeholderTextColor?: any;
}
