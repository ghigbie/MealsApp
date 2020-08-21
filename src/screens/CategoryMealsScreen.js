import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Colors from './../../constants/Colors';

import {CATEGORIES, MEALS} from './../../data/dummy-data';
import MealItemCard from '../components/MealItemCard';

const CategoryMealsScreen = ({navigation}) => {
  const catId = navigation.getParam('categoryId');
  const colorStyle = navigation.getParam('color');

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  const onSelectMeal = () => {
    console.log('On select meal called');
  };

  return (
    <View style={{...styles.container, backgroundColor: '#ccc'}}>
      <FlatList
        style={{width: '100%'}}
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={(item) => (
          <MealItemCard
            meal={item.item}
            color={colorStyle}
            navigation={navigation}
            onSelectMeal={() => {
              console.log('On select meal called');
              navigation.navigate({
                routeName: 'MealDetail',
                params: {
                  mealId: item.id,
                },
              });
            }}
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
