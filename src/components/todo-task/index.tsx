import {View, FlatList} from 'react-native';
import React from 'react';
import {ITodoTask} from '../../types';
import styles from './styles';
import Task from '../task';

interface ITodoTaskProps {
  data: ITodoTask[];
}

export default function TotoTasks({data = []}: ITodoTaskProps) {
  const renderItem = ({item}: {item: ITodoTask}) => {
    return <Task task={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item?.id + index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
