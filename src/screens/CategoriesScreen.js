import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import CATEGORIES from './../../data/dummy-data';

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
      ItemSeparatorComponent={() => (
        <View style={{width: 16, backgroundColor: 'pink'}} />
      )}
      columnWrapperStyle={{width: '100%'}}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'grey',
    justifyContent: 'space-between',
  },
});

export default CategoriesScreen;
