import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';

const MealItemCard = ({meal, color, onSelectMeal}) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{...styles.container, backgroundColor: color}}>
      <TouchableComponent onPress={onSelectMeal} style={styles.touchable}>
        <View style={{...styles.mealHeader}}>
          <ImageBackground
            source={{
              uri: meal.imageUrl,
            }}
            style={styles.image}
            borderRadius={18}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title} numberOfLines={1}>
                {meal.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{...styles.mealRow, ...styles.mealDetail}}>
          <Text style={styles.footerText}>{meal.duration} mins</Text>
          <Text style={styles.footerText}>{meal.complexity.toUpperCase()}</Text>
          <Text style={styles.footerText}>
            {meal.affordability.toUpperCase()}
          </Text>
        </View>
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
    height: Dimensions.get('screen').height / 3,
    width: Dimensions.get('screen').width - 36,
  },
  touchable: {
    flex: 1,
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  titleWrapper: {
    borderRadius: 18,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    marginHorizontal: 4,
    color: '#fff',
  },
  image: {
    height: '96%',
    margin: 4,
    marginTop: 8,
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '90%',
    overflow: 'hidden',
  },
  mealDetail: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  footerText: {
    fontFamily: 'OpenSans-Bold',
  },
});

export default MealItemCard;
