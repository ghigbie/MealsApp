import React from 'react';
import {Text} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import Colors from '../../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton {...props}>
      <Text>Do Stuff</Text>
    </HeaderButton>
  );
};

export default CustomHeaderButton;
