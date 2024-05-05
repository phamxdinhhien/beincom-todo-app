import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../themes/colors';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

export default function AddTaskButton() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const goToAddTask = () => {
    navigation.navigate('AddTaskScreen');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={goToAddTask}>
      <Ionicons
        name="add-circle"
        color={Colors.primary}
        size={getResponsiveWidth(150)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    bottom: getResponsiveHeight(200),
    zIndex: 100,
  },
});
