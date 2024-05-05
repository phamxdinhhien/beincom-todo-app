import {View} from 'react-native';
import React from 'react';
import {Container} from '../../components/container';
import FastImage from 'react-native-fast-image';
import Logo from '../../static/bic_logo.png';
import BeincomTitleImg from '../../static/beincom_title.png';
import styles from './styles';
import AddTaskButton from '../../components/add-task-button';
import TotoTasks from '../../components/todo-task';
import {useHomeScreenHook} from './hook';
import FilterTasks from './components/filter-tasks';
export const HomeScreen = () => {
  const {data} = useHomeScreenHook();
  return (
    <Container style={styles.container}>
      <AddTaskButton />
      <View style={styles.header}>
        <FastImage
          source={Logo}
          style={styles.headerIcon}
          resizeMode="contain"
        />
        <FastImage
          source={BeincomTitleImg}
          style={styles.headerIconTitle}
          resizeMode="contain"
        />
      </View>
      <FilterTasks />
      <TotoTasks data={data} />
    </Container>
  );
};
