import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';

const MealCard = ({meal, color}) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  console.log('Meal Item: ', meal);

  return (
    <View style={{...styles.container, backgroundColor: color}}>
      <TouchableComponent
        onPress={() => {
          console.log(meal.title);
        }}
        style={styles.touchable}>
        <Text style={styles.title} numberOfLines={2}>
          {meal.title}
        </Text>
        <Text>{meal.affordability}</Text>
        <Image
          source={{
            uri: meal.imageUrl,
          }}
          style={styles.image}
          borderRadius={18}
        />
        <Text>{meal.ingredients}</Text>
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
    height: Dimensions.get('screen').height / 2,
    width: Dimensions.get('screen').width - 36,
  },
  touchable: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
  },
  image: {
    height: 260,
  },
});

export default MealCard;
