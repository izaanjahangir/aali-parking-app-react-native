import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
import measurements from '../../config/measurements';

export default StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 40,
    borderColor: colors.WHITE,
    color: colors.WHITE,
    borderWidth: 1,
    paddingHorizontal: measurements.SPACING_SMALL,
    paddingVertical: measurements.SPACING_SMALL * 0.7,
    borderRadius: 5,
    fontSize: measurements.FONT_SMALL,
    marginTop: measurements.SPACING_SMALL,
    marginBottom: measurements.SPACING_SMALL,
  },
});
