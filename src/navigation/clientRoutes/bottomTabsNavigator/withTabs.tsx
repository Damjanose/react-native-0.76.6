import withTabs from '../../../components/HOC/withTabs';
import HomeScreen from '../../../screens/HomeScreen.tsx';
import ReservationScreen from '../../../screens/ReservationScreen';
import ProfileScreen from '../../../screens/ProfileScreen';

const HomeScreenWithTabs = withTabs(HomeScreen, 'Home');
const ReservationScreenWithTabs = withTabs(ReservationScreen, 'Reservation');
const ProfileScreenWithTabs = withTabs(ProfileScreen, 'Profile');

export { HomeScreenWithTabs, ReservationScreenWithTabs, ProfileScreenWithTabs };
