import React from 'react';
import {FlatList, View, Text} from 'react-native';

import CATEGORIES from './../../data/dummy-data';

import GridItem from './../components/GridItem';

const CategoriesScreen = ({navigation}) => {
  const renderGridItem = (itemData) => {
    return <GridItem item={itemData.item} navigation={navigation} />;
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      renderItem={renderGridItem}
    />
  );
};

export default CategoriesScreen;
