import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';

export default StyleSheet.create({
  taskContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    fontWeight: '600',
    color: Colors.primary,
    fontSize: 14,
  },
  description: {
    fontSize: 10,
    color: Colors.black,
  },
  date: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.black,
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
  timeContainer: {
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
