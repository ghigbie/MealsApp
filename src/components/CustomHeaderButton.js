import React from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-ionicons';
import {HeaderButton} from 'react-navigation-header-buttons';
import Colors from '../../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color={Platform.OS === 'android' ? '#fff' : Colors.primary}
    />
  );
};

export default CustomHeaderButton;
