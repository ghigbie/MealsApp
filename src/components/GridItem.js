import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GridItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(item.item, 'was pressed');
        navigation.navigate({routeName: 'CategoryMeals'});
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
    margin: 16,
    height: 152,
    width: '100%',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
  },
});

export default GridItem;
