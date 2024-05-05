import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    paddingHorizontal: 16,
  },
  headerIcon: {
    height: getResponsiveWidth(80),
    width: getResponsiveWidth(80),
    borderRadius: 4,
    overflow: 'hidden',
  },
  headerIconTitle: {
    width: getResponsiveWidth(317),
    height: getResponsiveHeight(100),
  },
});
