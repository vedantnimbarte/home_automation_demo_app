import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens';

const Stack = createStackNavigator();

export const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};
