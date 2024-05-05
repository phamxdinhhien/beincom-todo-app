import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export default StyleSheet.create({
  container: {flex: 1, paddingTop: 16},
  contentContainerStyle: {
    // flex: 1,
    rowGap: 8,
    backgroundColor: Colors.gray,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 200,
  },
  taskContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
  },
  columnWrapperStyle: {
    columnGap: 16,
  },
});
