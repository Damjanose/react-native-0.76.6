import React from 'react';
import { Modal, Portal } from 'react-native-paper';
import { Props } from 'react-native-paper/lib/typescript/components/Modal';
import { StyleSheet } from 'react-native';

type ExtraProps = { modalVisible: boolean; onDismiss?: () => void };
const style = StyleSheet.create({ container: { padding: 10, marginTop: '-6%' } });

export const ModalPicker = (props: Omit<Props & ExtraProps, 'theme'>) => (
  <Portal>
    <Modal visible={props.modalVisible} contentContainerStyle={style.container} onDismiss={props.onDismiss}>
      {props.children}
    </Modal>
  </Portal>
);
