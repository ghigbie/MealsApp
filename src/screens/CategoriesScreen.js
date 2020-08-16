import React from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';

import CATEGORIES from './../../data/dummy-data';

import GridItem from './../components/GridItem';

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories Screen</Text>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={GridItem}
      />
      <Text style={styles.text}>Categories Screen</Text>
      <Button
        title="Category Meals Screen"
        onPress={() => {
          navigation.navigate({routeName: 'CategoryMeals'});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
  },
});

export default CategoriesScreen;
