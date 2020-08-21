import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from './../../constants/Colors';

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
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
