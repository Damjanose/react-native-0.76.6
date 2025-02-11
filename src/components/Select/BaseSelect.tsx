import React, { PropsWithoutRef, useState } from 'react';
import { useColorScheme } from 'react-native';
import { Text } from 'react-native-paper';
import DropDownPicker, { DropDownPickerProps, ThemeNameType, ValueType } from 'react-native-dropdown-picker';
import useList, { TableServiceOperation } from '../../hooks/useList';
import { styles } from '../TextInput/TextField.component';

export type TItemFomFetch = { name: string; id: string | number };
type Props<T> = Omit<PropsWithoutRef<DropDownPickerProps<T>>, 'open' | 'items' | 'setOpen'> & {
  service: TableServiceOperation<TItemFomFetch>;
  filter: (item: Record<string, string | number>) => { value: string | number; label: string };
  query?: string;
  errors?: string;
};

export type WrapperProps<T> = Omit<
  PropsWithoutRef<DropDownPickerProps<T>> & { errors?: string },
  'open' | 'items' | 'setOpen'
>;
export type WrapperValueT = ValueType;

export default function BaseSelect<T extends ValueType>(props: Props<T>) {
  const [open, setOpen] = useState(false);
  const { items, setItems, isLoading } = useList<TItemFomFetch>({
    service: props.service,
    forceFetch: true,
    query: props.query,
  });
  const theme = useColorScheme();
  return (
    <>
      <DropDownPicker
        flatListProps={{ nestedScrollEnabled: true }}
        {...props}
        theme={theme?.toUpperCase() as ThemeNameType}
        loading={isLoading}
        open={open}
        dropDownContainerStyle={{ marginHorizontal: 8.5, width: '95.2%' }}
        items={items.map(props.filter)}
        setOpen={setOpen}
        setItems={setItems}
      />
      <Text style={styles.errorStyle}>{props.errors}</Text>
    </>
  );
}
