import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../themes/colors';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils';

interface IAddTaskButtonProps {
  onPress?: () => void;
}

export default function AddTaskButton({
  onPress = () => {},
}: IAddTaskButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
