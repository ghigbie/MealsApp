import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const MealCard = ({meal}) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={{...styles.container}}>
      <TouchableComponent
        onPress={() => {
          console.log(meal.title);
        }}
        style={styles.touchable}>
        <Text style={styles.title} numberOfLines={2}>
          {meal.title}
        </Text>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 18,
    shadowColor: 'black',
    shadowOpacity: 0.24,
    shadowOffset: {width: 0, height: 6},
    shadowRadius: 18,
    elevation: 6,
  },
  touchable: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    textAlign: 'right',
  },
});

export default MealCard;
