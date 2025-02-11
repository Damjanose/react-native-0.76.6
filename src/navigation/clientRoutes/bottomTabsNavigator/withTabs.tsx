import withTabs from '../../../components/HOC/withTabs';
import HomeScreen from '../../../screens/HomeScreen.tsx';
import SettingsScreen from '../../../screens/SettingsScreen';
import ProfileScreen from '../../../screens/ProfileScreen';

const HomeScreenWithTabs = withTabs(HomeScreen, 'Home');
const SettingsScreenWithTabs = withTabs(SettingsScreen, 'Settings');
const ProfileScreenWithTabs = withTabs(ProfileScreen, 'Profile');

export { HomeScreenWithTabs, SettingsScreenWithTabs, ProfileScreenWithTabs };
