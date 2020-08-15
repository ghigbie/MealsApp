import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import CategoryMealsScreen from './src/screens/CategoryMealsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import FiltersScreen from './src/screens/FiltersScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
import MealsNavigator from './src/navigation/MealsNavigator';

const App = () => {
  if (true) {
    return <MealsNavigator />;
  } else {
    return (
      <View style={styles.appContainer}>
        <CategoriesScreen />
        <CategoryMealsScreen />
        <FavoritesScreen />
        <FiltersScreen />
        <MealDetailScreen />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
