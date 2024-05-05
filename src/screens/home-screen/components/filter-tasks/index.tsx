import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {DEFAULT_FILTER_TASK} from '../../../../constants';

export default function FilterTasks() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const listRef = useRef<any>();

  const renderItem = ({item, index}: {item: string; index: number}) => {
    const isActive = activeIndex === index;
    return (
      <TouchableOpacity
        style={[styles.itemContainer, isActive && styles.isActiveItemContainer]}
        onPress={() => {
          listRef?.current?.scrollToIndex?.({
            index,
            animated: true,
          });
          setActiveIndex(index);
        }}>
        <Text style={[styles.title, isActive && styles.isActiveTitle]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        ref={listRef}
        data={DEFAULT_FILTER_TASK}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
