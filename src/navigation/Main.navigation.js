import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigation} from './Auth.navigation';
import {HomeNavigation} from './Home.navigation';
const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthNavigator" component={AuthNavigation} />
      <Stack.Screen name="HomeNavigator" component={HomeNavigation} />
    </Stack.Navigator>
  );
};
