import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';

import GoalItem from './components/GoalItem/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState<{id: string, value: string}[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);
  console.log('rerendering component');
  console.log(courseGoals);

  const addGoalHandler = (goalTitle: string) => {
    if (goalTitle.length === 0) return;
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalTitle,
      }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId: string) => {
    console.log('will be deleted: ' + goalId);
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        onCancel={cancelGoalAdditionHandler}
        visible={isAddMode}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={() => removeGoalHandler(itemData.item.id)} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
