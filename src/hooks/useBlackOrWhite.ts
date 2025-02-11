import { useColorScheme } from 'react-native';
import Colors from '../styles/colors';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  const blackOrWhite = isDarkMode ? Colors.black : Colors.white;
  const whiteOrBlack = isDarkMode ? Colors.white : Colors.black;
  const blackOrPaperWhite = isDarkMode ? Colors.black : Colors.paperWhite;
  const paperBlackOrPaperWhite = isDarkMode ? Colors.paperBlack : Colors.paperWhite;
  const paperBlackOrWhite = isDarkMode ? Colors.paperBlack : Colors.white;

  const primaryColor = isDarkMode ? Colors.primary : Colors.primary;
  const secondaryColor = isDarkMode ? Colors.secondary : Colors.secondary;
  const accentColor = isDarkMode ? Colors.accent : Colors.accent;

  return {
    blackOrWhite,
    whiteOrBlack,
    blackOrPaperWhite,
    paperBlackOrPaperWhite,
    paperBlackOrWhite,
    primaryColor,
    secondaryColor,
    accentColor,
  };
};
