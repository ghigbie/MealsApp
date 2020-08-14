import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FiltersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Filter Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FiltersScreen;
