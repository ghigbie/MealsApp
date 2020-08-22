import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-bottom-tab-navigator';
import Colors from './../../constants/Colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        ...Platform.select({
          android: {backgroundColor: Colors.primaryColor},
          ios: {backgroundColor: '#fff'},
        }),
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : '#000',
    },
  },
);

const tabNavigationConfig = {
  Meals: {screen: MealsNavigator, navigationOptions: {}},
  Favorites: {screen: FavoritesScreen, navigationOptions: {}},
};

const MealsFabTabNavigator =
  Platform.os === 'android'
    ? createMaterialBottomTabNavigator(tabNavigationConfig, {
        activeTintColor: Colors.primary,
        shifting: true,
      })
    : createBottomTabNavigator(tabNavigationConfig, {
        initialRouteName: 'Meals',
        tabBarOptions: {activeTintColor: Colors.primary},
        allowFontScaling: true,
      });

export default createAppContainer(MealsFabTabNavigator);
