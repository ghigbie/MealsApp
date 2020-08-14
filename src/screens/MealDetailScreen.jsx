import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MealDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meal Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
