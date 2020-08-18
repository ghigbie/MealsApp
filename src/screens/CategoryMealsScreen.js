import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import CATEGORIES from './../../data/dummy-data';
import Colors from '../../constants/Colors';

const CategoryMealsScreen = ({navigation}) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.container}>
      <Text>{selectedCategory.title}</Text>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = {
  headerTitle: 'Moo',
  headerStyle: {
    ...Platform.select({
      android: {backgroundColor: Colors.primaryColor},
      ios: {backgroundColor: '#fff'},
    }),
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : '#000',
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
