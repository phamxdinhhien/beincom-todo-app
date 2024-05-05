import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ITodoTask} from '../../types';
import styles from './styles';
import dayjs from 'dayjs';
import ProgressLine from '../progress-line';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface ITaskProps {
  task: ITodoTask;
}
export default function Task({task}: ITaskProps) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {title, description} = task;
  const onPress = () => {
    navigation.navigate('TaskDetail', {
      task,
    });
  };
  return (
    <TouchableOpacity style={styles.taskContainer} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} ellipsizeMode="tail" numberOfLines={1}>
        {description}
      </Text>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>Timeline</Text>
        <Text style={styles.date}>{dayjs().format('DD/MM/YYYY')}</Text>
      </View>
      <ProgressLine />
    </TouchableOpacity>
  );
}
