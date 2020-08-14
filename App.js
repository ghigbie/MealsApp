import React from 'react';
import {StyleSheet, View} from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <CategoriesScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
