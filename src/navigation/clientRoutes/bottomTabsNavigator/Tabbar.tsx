import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import React, { useEffect } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ICONS, shadow } from './data';

const Tabbar = ({ state, insets, descriptors, navigation }: BottomTabBarProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(75, withTiming(1));
  }, [progress]);

  const bottom = insets.bottom > 0 ? insets.bottom : 0;

  return (
    <Animated.View style={[styles.container, { paddingBottom: bottom }]}>
      <View style={[styles.tabContainer, shadow]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;
          const icon = isFocused ? ICONS[index].active : ICONS[index].inactive;
          const title = ICONS[index].title;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={`tabbar-${index}`}
              activeOpacity={0.5}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.tab, isFocused && styles.focusedTab]}>
              <Image source={icon} style={styles.icon} />
              {isFocused && <Text style={[styles.label, isFocused && styles.focusedLabel]}>{title}</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </Animated.View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  focusedTab: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 10,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: '#8e8e8e',
  },
  focusedLabel: {
    color: '#000000',
    fontWeight: 'bold',
  },
});
