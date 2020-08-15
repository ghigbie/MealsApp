import React from 'react';
import renderer from 'react-test-renderer';
import FiltersScreen from '../FiltersScreen';

describe('<FiltersScreen />', () => {
  it('renders correctly', () => {
    renderer.create(<FiltersScreen />);
  });
});
