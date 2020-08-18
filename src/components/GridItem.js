import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const GridItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate({
          routeName: 'CategoryMeals',
          params: {
            categoryId: item.id,
          },
        });
      }}>
      <View style={{...styles.container, backgroundColor: item.color}}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    height: 152,
    minWidth: Dimensions.get('screen').width / 2 - 32,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
  },
});

export default GridItem;
