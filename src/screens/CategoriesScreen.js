import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {CATEGORIES} from './../../data/dummy-data';
import Colors from './../../constants/Colors';

import CategoryGridItem from '../components/CategoryGridItem';

const CategoriesScreen = ({navigation}) => {
  return (
    <FlatList
      style={{width: '100%'}}
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      contentContainerStyle={styles.contentContainer}
      renderItem={({item}) => (
        <CategoryGridItem
          title={item.title}
          color={item.color}
          id={item.id}
          onSelect={() => {
            navigation.navigate({
              routeName: 'CategoryMeals',
              params: {
                categoryId: item.id,
                color: item.color,
              },
            });
          }}
        />
      )}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.lightGrey,
    justifyContent: 'space-between',
  },
});

export default CategoriesScreen;
