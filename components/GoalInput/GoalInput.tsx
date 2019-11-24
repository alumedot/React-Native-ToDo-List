import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

import { IProps } from './types';


const GoalInput = (props: IProps) => {
  const [enteredGoal, setEnteredGoal] = useState<string>('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoal}
          placeholder="Course Goal"
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add"/>
          </View>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderRadius: 5,
    width: '80%',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    shadowOffset:{ width: 2, height: 3, },
    shadowColor: '#0a75e9',
    shadowOpacity: 0.4,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
