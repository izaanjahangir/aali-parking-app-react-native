import {StyleSheet} from 'react-native';

import colors from '../../config/colors';
import measurements from '../../config/measurements';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: measurements.SPACING_MEDIUN * 1.5,
    paddingVertical: measurements.SPACING_MEDIUN * 1.5,
  },
  headingContainer: {
    paddingBottom: measurements.SPACING_MEDIUN,
  },
  heading: {
    fontSize: measurements.FONT_MEDIUM,
    color: colors.WHITE,
  },
  slotContainer: {
    marginTop: measurements.SPACING_MEDIUN,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    opacity: 0.15,
  },
  buttonContainer: {
    paddingTop: measurements.SPACING_MEDIUN,
    width: '100%',
  },
  parkedMainContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  parkedContainer: {
    backgroundColor: colors.THEME_GREEN,
    width: '100%',
    paddingTop: measurements.SPACING_MEDIUN,
    paddingBottom: measurements.SPACING_MEDIUN,
    paddingHorizontal: measurements.SPACING_MEDIUN,
    borderRadius: 10,
  },
  yourParkedText: {
    color: colors.WHITE,
    fontSize: measurements.FONT_MEDIUM * 0.8,
    textAlign: 'center',
  },
  yourParkedDate: {
    color: colors.WHITE,
    fontSize: measurements.FONT_NORMAL,
    textAlign: 'center',
  },
  reminderText: {
    marginTop: measurements.SPACING_SMALL,
    color: colors.RED,
    fontSize: measurements.FONT_SMALL,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
