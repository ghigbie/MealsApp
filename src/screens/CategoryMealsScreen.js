import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import {CATEGORIES, MEALS} from './../../data/dummy-data';
import Colors from '../../constants/Colors';

const CategoryMealsScreen = ({navigation}) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = MEALS.filter((meal) => {
    meal.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <View style={styles.container}>
      <Text>{selectedCategory.title}</Text>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00f',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
