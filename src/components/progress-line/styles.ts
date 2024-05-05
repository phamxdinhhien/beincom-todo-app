import {StyleSheet} from 'react-native';
import {getResponsiveHeight} from '../../utils';
import {Colors} from '../../themes/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: getResponsiveHeight(30),
    backgroundColor: Colors.secondary,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
  },
  progress: {
    height: getResponsiveHeight(30),
    backgroundColor: Colors.primary,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  progressTitle: {
    fontSize: 12,
    color: 'gray',
  },
  progressPercent: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.black,
  },
});
