import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;