import * as React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import NearbyScreen from '../screens/NearbyScreen';
import SearchScreen from '../screens/SearchScreen';
import UserScreen from '../screens/UserScreen';

interface INavigationOptions {
    focused: boolean;
}

const HomeStack = createStackNavigator({ Home: NearbyScreen });
HomeStack.navigationOptions = {
    tabBarIcon: (options: INavigationOptions) => (
        <TabBarIcon focused={options.focused} name={Platform.OS === 'ios' ? 'ios-compass' : 'md-compass' }/>
    ),
    tabBarLabel: 'Nearby'
};

const SearchStack = createStackNavigator({ Search: SearchScreen });
SearchStack.navigationOptions = {
    tabBarIcon: (options: INavigationOptions) => (
        <TabBarIcon focused={options.focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search' }/>
    ),
    tabBarLabel: 'Search'
};

const UserStack = createStackNavigator({ User: UserScreen });
UserStack.navigationOptions = {
    tabBarIcon: (options: INavigationOptions) => (
        <TabBarIcon focused={options.focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact' }/>
    ),
    tabBarLabel: 'Me'
};

export default createBottomTabNavigator({
    HomeStack,
    SearchStack,
    UserStack
});
