import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreensPropTypes } from '../types/navigation';

type Props = {
  handleOnNavigate?: () => void;
  title?: string;
};

const GoBackHeader: React.FC<Props> = ({ handleOnNavigate, title }) => {
  const { goBack } = useNavigation<NavigationScreensPropTypes>();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    icon: {
      marginRight: 10,
    },
    title: {
      flex: 1,
      fontSize: 18,
      color: '#fff',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnNavigate ? handleOnNavigate : goBack} style={styles.icon}>
        <MCIcon color="#fff" size={30} name="chevron-left" />
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default GoBackHeader;
