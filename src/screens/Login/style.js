import {StyleSheet} from 'react-native';

import colors from '../../config/colors';
import measurements from '../../config/measurements';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: measurements.SPACING_MEDIUN * 1.5,
  },
  profilePicture: {
    width: measurements.WINDOW_WIDTH * 0.35,
    height: measurements.WINDOW_WIDTH * 0.35,
    borderRadius: measurements.WINDOW_WIDTH * 0.35,
  },
  heading: {
    marginTop: measurements.SPACING_MEDIUN,
    fontSize: measurements.FONT_MEDIUM,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    marginTop: measurements.SPACING_MEDIUN,
  },
  text: {
    fontSize: measurements.FONT_NORMAL,
    color: colors.BLACK,
  },
  loginButton: {
    marginTop: measurements.SPACING_SMALL,
  },
});
