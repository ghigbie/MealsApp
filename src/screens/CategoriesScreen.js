import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories Screen</Text>
      <Button
        title="Category Meals Screen"
        onPress={() => {
          navigation.navigate('CategoryMeals');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'OpenSans-Bold',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
  },
});

export default CategoriesScreen;
