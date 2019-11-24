 import React from 'react';
 import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

 import { IProps } from './types';


 const GoalItem = (props: IProps) => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 3,
  }
});

export default GoalItem;
