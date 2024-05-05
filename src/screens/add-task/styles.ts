import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/colors';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils';

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
    paddingTop: 16,
    paddingVertical: 20,
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
  inputContainer: {
    marginTop: 16,
    rowGap: 12,
  },
  label: {
    color: Colors.primary,
    fontWeight: '500',
    fontSize: 14,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  height100: {
    height: getResponsiveHeight(500),
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  taskProgress: {
    marginVertical: 16,
    color: Colors.primary,
    fontWeight: '700',
  },
  addTaskContainer: {
    marginTop: 16,
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 8,
    overflow: 'hidden',
  },
  noBorder: {
    borderWidth: 0,
  },
  addTaskProgressButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: Colors.primary,
  },
  progressAdded: {
    color: Colors.black,
  },
});
