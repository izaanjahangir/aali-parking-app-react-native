import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
import measurements from '../../config/measurements';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.THEME_GREEN,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    paddingLeft: measurements.SPACING_SMALL * 1.2,
    paddingRight: measurements.SPACING_SMALL * 1.2,
  },
  text: {
    color: colors.WHITE,
    fontSize: measurements.FONT_NORMAL,
  },
});
