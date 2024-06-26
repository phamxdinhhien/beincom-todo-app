import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';
import {getResponsiveWidth} from '../../utils';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    paddingBottom: 12,
    borderColor: Colors.lightGray,
  },
  iconContainer: {
    flex: 1,
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.primary,
  },
  taskInfoContainer: {
    marginHorizontal: 16,
    padding: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
  },
  taskTitle: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskDescription: {
    fontSize: 12,
    color: Colors.black,
    marginTop: 4,
    marginBottom: 12,
  },
  taskProgressContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    marginTop: 24,
  },
  unDone: {
    height: getResponsiveWidth(40),
    width: getResponsiveWidth(40),
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 2,
    marginLeft: 2,
  },
  progressName: {
    color: Colors.black,
  },
  footer: {
    position: 'absolute',
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    left: 0,
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
