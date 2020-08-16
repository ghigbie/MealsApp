import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import CATEGORIES from './../../data/dummy-data';

import GridItem from './../components/GridItem';

const CategoriesScreen = ({navigation}) => {
  const renderGridItem = (itemData) => {
    return <GridItem item={itemData.item} navigation={navigation} />;
  };

  return (
    <FlatList
      style={styles.container}
      numColumns={1}
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'grey',
  },
});

export default CategoriesScreen;
