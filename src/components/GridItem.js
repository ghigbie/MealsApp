import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GridItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
  },
});

export default GridItem;
