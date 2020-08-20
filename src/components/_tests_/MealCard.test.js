import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MealCard from './../MealItemCard';

describe('<MealItemCard/> ', () => {
  it('renders correctly', () => {
    renderer.create(<MealCard title={'moo'} />);
  });
});
