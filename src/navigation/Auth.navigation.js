import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../screens';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};
