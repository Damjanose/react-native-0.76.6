import React from 'react';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { Props } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import { theme } from '../../theme/paperComponents';
import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  errorStyle: {
    color: '#b20000',
    alignSelf: 'center',
    marginTop: -5,
    fontWeight: '700',
  },
  inputHeight: {
    height: 48,
  },
});

export const TextInputIcon = PaperTextInput.Icon;

export const TextInput = ({
  errors,
  error,
  mode = 'outlined',
  autoCapitalize = 'none',
  autoCorrect = false,
  ...rest
}: Omit<Props, 'theme'> & { errors?: string }) => {
  return (
    <View>
      <PaperTextInput
        {...rest}
        error={error || !!errors}
        theme={theme}
        mode={mode}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        style={[styles.inputHeight, rest.style]}
      />
      {errors && <Text style={styles.errorStyle}>{errors}</Text>}
    </View>
  );
};
