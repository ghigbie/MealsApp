import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import CustomHeaderButton from '../CustomHeaderButton';

describe('<CustomHeaderButton/> ', () => {
  it('renders correctly', () => {
    renderer.create(<CustomHeaderButton />);
  });
});
