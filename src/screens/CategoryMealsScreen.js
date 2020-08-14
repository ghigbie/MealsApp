import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CategoryMealsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Category Meal Screen</Text>
    </View>
  );
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
