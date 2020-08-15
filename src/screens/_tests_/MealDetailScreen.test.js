import React from 'react';
import renderer from 'react-test-renderer';
import MealDetailScreen from '../MealDetailScreen';

describe('<MealDetailScreen />', () => {
  it('renders correctly', () => {
    renderer.create(<MealDetailScreen />);
  });
});
