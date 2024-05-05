import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function ProgressLine() {
  const percent = Math.round(Math.random() * 100);
  return (
    <View>
      <View style={styles.progressRow}>
        <Text style={styles.progressTitle}>Progress</Text>
        <Text style={styles.progressPercent}>{`${percent}%`}</Text>
      </View>
      <View style={styles.container}>
        <View
          style={[
            styles.progress,
            {
              width: `${percent}%`,
            },
          ]}
        />
      </View>
    </View>
  );
}
