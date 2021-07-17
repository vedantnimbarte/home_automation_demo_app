import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens';
import {COLORS, FONTS} from '../constants/theme';

const Stack = createStackNavigator();

export const HomeNavigation = () => {
  return (
    <Stack.Navigator
      detachInactiveScreens={true}
      screenOptions={{
        headerTitle: 'Home Automation',
        headerTitleAlign: 'center',
        headerTintColor: COLORS.White,
        headerStyle: {
          backgroundColor: COLORS.Primary,
        },
        headerTitleStyle: {
          fontFamily: FONTS.Primary,
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerLeft: false,
        }}
      />
    </Stack.Navigator>
  );
};
