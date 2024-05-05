import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Container} from '../../components/container';
import {useNavigation} from '@react-navigation/native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {getResponsiveWidth} from '../../utils';
import {Colors} from '../../themes/colors';
import styles from './styles';

export default function AddTask() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

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
        <Text style={styles.titleHeader}>New task</Text>
        <View style={styles.iconContainer} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput style={[styles.input]} placeholder="Task name" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.height100]}
            multiline
            textAlignVertical="top"
            placeholder="Description about task"
          />
        </View>
        <Text style={styles.taskProgress}>Task progress</Text>
        {Array(10)
          .fill('Progress name ')
          .map((progress, index) => (
            <Text style={styles.progressAdded} key={index}>
              - {progress}
            </Text>
          ))}
        <View style={styles.addTaskContainer}>
          <TextInput
            style={[styles.input, styles.noBorder]}
            placeholder="Add new progress"
          />
          <TouchableOpacity style={styles.addTaskProgressButton}>
            <AntDesignIcons
              name="plus"
              size={getResponsiveWidth(70)}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footerText}>Add</Text>
      </TouchableOpacity>
    </Container>
  );
}
