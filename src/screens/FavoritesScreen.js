import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
