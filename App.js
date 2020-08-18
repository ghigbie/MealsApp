import React from 'react';
import {StyleSheet} from 'react-native';
import MealsNavigator from './src/navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';

enableScreens();

const App = () => <MealsNavigator style={styles.appContainer} />;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
