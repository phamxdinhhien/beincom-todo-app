import {StyleSheet} from 'react-native';
import {Colors} from '../../../../themes/colors';

export default StyleSheet.create({
  container: {
    marginTop: 16,
  },
  list: {paddingHorizontal: 16},
  contentContainerStyle: {
    columnGap: 8,
  },
  itemContainer: {
    paddingVertical: 8,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  title: {
    color: Colors.primary,
  },
  isActiveItemContainer: {
    backgroundColor: Colors.primary,
  },
  isActiveTitle: {
    color: Colors.white,
  },
});
