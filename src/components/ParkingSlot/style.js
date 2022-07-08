import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
import measurements from '../../config/measurements';

export default StyleSheet.create({
  container: {
    borderColor: colors.WHITE,
    borderWidth: 1,
    width: measurements.WINDOW_WIDTH * 0.23,
    height: measurements.WINDOW_WIDTH * 0.23,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: measurements.SPACING_SMALL,
    paddingRight: measurements.SPACING_SMALL,
    marginLeft: measurements.SPACING_SMALL,
    marginRight: measurements.SPACING_SMALL,
    marginTop: measurements.SPACING_SMALL,
    marginBottom: measurements.SPACING_SMALL,
  },
  containerSelected: {
    backgroundColor: colors.THEME_GREEN,
  },
  containerReserved: {
    opacity: 0.3,
  },
  slotText: {
    color: colors.WHITE,
    fontSize: measurements.FONT_SMALL * 1.1,
  },
  selectedText: {
    color: colors.WHITE,
    fontSize: measurements.FONT_SMALL,
  },
});
