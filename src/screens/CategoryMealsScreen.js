import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Colors from './../../constants/Colors';

import {CATEGORIES, MEALS} from './../../data/dummy-data';
import MealCard from './../components/MealCard';

const CategoryMealsScreen = ({navigation}) => {
  const catId = navigation.getParam('categoryId');
  const colorStyle = navigation.getParam('color');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );
  return (
    <View style={{...styles.container, backgroundColor: '#ccc'}}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={(item) => (
          <MealCard
            meal={item.item}
            color={colorStyle}
            navigation={navigation}
          />
        )}
      />
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
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
