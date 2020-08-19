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
    <TouchableOpacity onPress={onSelect}>
      <View style={{...styles.container, backgroundColor: color}}>
        <Text style={styles.text}>{title}</Text>
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
    borderRadius: (Dimensions.get('screen').width / 2 - 32) / 2,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
  },
});

export default CategoryGridItem;
