import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import Colors from './../../constants/Colors';
import {MEALS} from './../../data/dummy-data';
import CustomHeaderButton from './../components/CustomHeaderButton';

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
    headerRight: () => (
      <HeaderButtons HeaderButton={CustomHeaderButton}>
        <Item title="Favorite" onPress={() => console.log('Favorite Marked')} />
      </HeaderButtons>
    ),
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
