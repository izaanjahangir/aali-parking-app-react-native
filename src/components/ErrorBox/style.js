import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
import measurements from '../../config/measurements';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  boxContainer: {
    height: measurements.WINDOW_HEIGHT * 0.35,
    width: '100%',
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: measurements.SPACING_MEDIUN
  },
  deleteIconContainer: {
    backgroundColor: colors.RED,
    width: measurements.WINDOW_WIDTH * 0.22,
    height: measurements.WINDOW_WIDTH * 0.22,
    borderRadius: measurements.WINDOW_WIDTH * 0.22,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.WHITE,
    borderWidth: 3,
    marginTop: -((measurements.WINDOW_WIDTH * 0.22) / 2),
    position: 'absolute',
  },
  deleteIcon: {
    width: measurements.WINDOW_WIDTH * 0.06,
    height: measurements.WINDOW_WIDTH * 0.06,
  },
  title: {
    color: colors.BLACK,
    fontSize: measurements.FONT_MEDIUM * 1.3,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    color: colors.BLACK,
    fontSize: measurements.FONT_NORMAL,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.RED,
    width: "100%",
    marginBottom: measurements.SPACING_MEDIUN
  },
});
