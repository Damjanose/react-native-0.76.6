import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FullScreenCard } from '../components/Cards/FullScreenCard';
import { Button } from 'react-native-paper';
import { SCREEN_HEIGHT } from '../constants/dimensions';

const TrackDriverScreen = () => {
  const searchClosestTaxi = () => {
    console.log('a');
  };

  return (
    <FullScreenCard>
      <View style={styles.container}>
        <Button textColor="white" style={styles.button} onPress={searchClosestTaxi}>
          Book a taxi
        </Button>
      </View>
    </FullScreenCard>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    flex: 1,
    height: SCREEN_HEIGHT,
  },
  button: {
    backgroundColor: 'purple',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 4,
    width: '40%',
    alignSelf: 'center',
  },
});

export default TrackDriverScreen;
