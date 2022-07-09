import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
import measurements from '../../config/measurements';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: measurements.WINDOW_HEIGHT * 0.4,
    backgroundColor: colors.THEME_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: measurements.FONT_NORMAL * 1.4,
    marginTop: measurements.SPACING_SMALL * 1.4,
    color: colors.WHITE,
  },
  emailText: {
    fontSize: measurements.FONT_NORMAL,
    color: colors.WHITE,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: measurements.SPACING_MEDIUN,
    paddingHorizontal: measurements.SPACING_MEDIUN,
  },
  logoutButton: {
    backgroundColor: colors.RED,
  },
});
