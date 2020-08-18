import React from 'react';
import {FlatList, StyleSheet, Platform} from 'react-native';

import CATEGORIES from './../../data/dummy-data';
import Colors from './../../constants/Colors';

import GridItem from './../components/GridItem';

const CategoriesScreen = ({navigation}) => {
  return (
    <FlatList
      style={styles.list}
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      contentContainerStyle={styles.contentContainer}
      renderItem={(item) => (
        <GridItem item={item.item} navigation={navigation} />
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
    backgroundColor: 'grey',
    justifyContent: 'space-between',
  },
});

export default CategoriesScreen;
