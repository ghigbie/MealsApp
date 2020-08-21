import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from './../../constants/Colors';
import {MEALS} from './../../data/dummy-data';

const MealDetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Meal Detail Screen</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
