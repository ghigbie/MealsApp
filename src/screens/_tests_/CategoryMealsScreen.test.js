import React from 'react';
import renderer from 'react-test-renderer';
import CategoryMealsScreen from '../CategoryMealsScreen';

describe('<CategoryMealsScreen />', () => {
  it('renders correctly', () => {
    renderer.create(<CategoryMealsScreen />);
  });
});
