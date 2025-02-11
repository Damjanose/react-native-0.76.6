import { StyleSheet } from 'react-native';
import { typography } from '../../../utils/typography.ts';
import colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  hr: {
    height: 1,
    backgroundColor: 'white',
    left: 8,
  },
  implementedWith: {
    paddingLeft: 8,
    paddingVertical: 16,
    color: 'white',
    fontSize: 18,
    fontFamily: typography.medium,
  },
  marginBottom: {
    marginBottom: 32,
  },
  drawerScroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sceneContainerStyle: {
    backgroundColor: 'transparent',
  },
  drawerStyle: {
    flex: 1,
    width: '65%',
    paddingRight: 20,
    backgroundColor: 'transparent',
  },
  navigatorContainer: {
    flex: 1,
    backgroundColor: '#575454',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
  },
  label: {
    fontSize: 18,
    paddingLeft: 8,
    fontFamily: typography.semiBold,
  },
  drawerItemContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 16,
  },
  drawerItemLabel: {
    color: 'white',
    marginLeft: 15,
    fontSize: 16,
    fontFamily: typography.regular,
  },
});
