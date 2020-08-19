import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

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
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    height: 152,
    minWidth: Dimensions.get('screen').width / 2 - 32,
    borderRadius: 18,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
  },
});

export default CategoryGridItem;
