import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { FullScreenCard } from '../components/Cards/FullScreenCard';
import colors from '../styles/colors';

const TrackDriverScreen = () => {
  const [timeLeft, setTimeLeft] = useState<number | null>(5); // Default to 5 minutes for now

  useEffect(() => {
    const fetchTimer = async () => {
      try {
        const response = { estimated_time: 10 }; // Example response (10 minutes)
        const minutes = response.estimated_time;

        setTimeLeft(minutes * 60); // Convert minutes to seconds
      } catch (error) {
        console.error('Error fetching timer:', error);
      }
    };

    fetchTimer();
  }, []);

  useEffect(() => {
    if (timeLeft === null) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => (prev && prev > 0 ? prev - 1 : 0)); // Decrease every second
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <FullScreenCard>
      <View style={styles.timerContainer}>
        {timeLeft !== null && (
          <View>
            <CircularProgress
              value={(timeLeft / (10 * 60)) * 100}
              radius={150}
              activeStrokeWidth={50}
              inActiveStrokeWidth={50}
              activeStrokeColor={colors.primary}
            />

            <Text style={styles.timerText}>{Math.ceil(timeLeft / 60)}</Text>
            <Text style={styles.timerLabel}>minutes until delivered</Text>
          </View>
        )}
      </View>
    </FullScreenCard>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.green,
  },
  timerLabel: {
    fontSize: 16,
    color: colors.darkGray,
    marginTop: 10,
  },
});

export default TrackDriverScreen;
