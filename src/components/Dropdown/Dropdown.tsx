import { Dropdown as ElementDropDown } from 'react-native-element-dropdown';

import React, { FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './Dropdown.styles';

export type Option = { label?: string; value?: string | number | boolean };

export type DropdownTypes = {
  data?: Option[];
  value?: string | number;
  onChange?: (item: Option) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  errorText?: string;
  disabled?: boolean;
};

const Dropdown: FC<DropdownTypes> = ({ data, value, onChange, placeholder, label, required, errorText, disabled }) => {
  const showLabel = () => {
    if (label) {
      return (
        <View style={styles.labelContainer}>
          {required && <Text style={styles.requieredAsterix}>*</Text>}
          <Text style={styles.inputTitle}>{label}</Text>
        </View>
      );
    }

    return <View />;
  };

  return (
    <View style={styles.container}>
      {showLabel()}
      <ElementDropDown
        disable={disabled}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data || []}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Kerko..."
        value={value}
        onChange={(item) => {
          if (onChange) {
            onChange(item);
          }
        }}
      />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default Dropdown;
