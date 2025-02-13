import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FullScreenCard } from '../components/Cards/FullScreenCard';

const TrackDriverScreen = () => {
  return (
    <FullScreenCard>
      <View style={styles.container} />
    </FullScreenCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrackDriverScreen;
