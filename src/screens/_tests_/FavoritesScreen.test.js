import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesScreen from '../FavoritesScreen';

describe('<FavoritesScreen />', () => {
  it('renders correctly', () => {
    renderer.create(<FavoritesScreen />);
  });
});
