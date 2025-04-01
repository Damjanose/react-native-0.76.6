import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { FullScreenCard } from '../components/Cards/FullScreenCard';
import { Button } from 'react-native-paper';
import { SCREEN_HEIGHT } from '../constants/dimensions';
import useLocation from '../providers/hooks/useLocation';
import useSearchClosestTaxi from '../services/hooks/useSearchClosestTaxi.ts';

const TrackDriverScreen = () => {
  const { location, setShouldFetchLocation } = useLocation();
  const { searchClosestTaxi, isFinding, message } = useSearchClosestTaxi();

  const searchTaxi = async () => {
    if (location) {
      setShouldFetchLocation(true);
      await searchClosestTaxi(location);
    }
  };

  const openMaps = () => {
    if (location?.latitude && location?.longitude) {
      const mapUrl = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
      Linking.openURL(mapUrl).catch(err => {
        console.error('Error opening map: ', err);
      });
    } else {
      console.error('Location is not available');
    }
  };

  return (
    <FullScreenCard>
      <View style={styles.container}>
        {message ? (
          <View>
            <Text style={styles.message}>{message}</Text>
            <Button textColor="white" style={styles.button} onPress={openMaps}>
              Find me
            </Button>
          </View>
        ) : (
          <Button textColor="white" style={styles.button} onPress={searchTaxi} loading={isFinding}>
            Book a taxi
          </Button>
        )}
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
  message: {
    fontSize: 20,
  },
});

export default TrackDriverScreen;
