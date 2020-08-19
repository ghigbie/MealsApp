import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const CategoryGridItem = ({title, color, onSelect}) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{...styles.container, backgroundColor: color}}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 152,
    minWidth: Dimensions.get('screen').width / 2 - 32,
    borderRadius: 18,
    shadowColor: 'black',
    shadowOpacity: 0.24,
    shadowOffset: {width: 0, height: 6},
    shadowRadius: 18,
    elevation: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
  },
});

export default CategoryGridItem;
