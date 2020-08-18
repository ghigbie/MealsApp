import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CATEGORIES from './../../data/dummy-data';

const CategoryMealsScreen = ({navigation}) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.container}>
      <Text>{selectedCategory.title}</Text>
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
