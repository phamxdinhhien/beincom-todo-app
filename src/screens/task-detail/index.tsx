import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Container} from '../../components/container';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ITodoTask} from '../../types';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FeatherIcons from 'react-native-vector-icons/Feather';
import styles from './styles';
import {getResponsiveWidth} from '../../utils';
import {Colors} from '../../themes/colors';
import ProgressLine from '../../components/progress-line';

export default function TaskDetail() {
  const route = useRoute<
    RouteProp<{
      params: {
        task: ITodoTask;
      };
    }>
  >();

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const {task} = route?.params || {};
  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
          <AntDesignIcons
            name="leftcircle"
            size={getResponsiveWidth(80)}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Detail</Text>
        <View style={styles.iconContainer} />
      </View>
      <View style={styles.taskInfoContainer}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <ProgressLine />
      </View>
      <View style={styles.taskProgressContainer}>
        <Text style={styles.titleHeader}>Task Progress</Text>
        {task?.taskProgress?.map?.((progress, index) => (
          <View key={index} style={styles.progressContainer}>
            {progress.done ? (
              <FeatherIcons
                name="check-square"
                color={Colors.primary}
                size={getResponsiveWidth(50)}
              />
            ) : (
              <View style={styles.unDone} />
            )}
            <Text style={styles.progressName}>{progress.progressName}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footerText}>Done</Text>
      </TouchableOpacity>
    </Container>
  );
}
