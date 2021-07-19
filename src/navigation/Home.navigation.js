import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Add_Product, Product, ConfigureHome} from '../screens';
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
      <Stack.Screen name="AddProductScreen" component={Add_Product} />
      <Stack.Screen name="ProductScreen" component={Product} />
      <Stack.Screen name="ConfigureHomeScreen" component={ConfigureHome} />
    </Stack.Navigator>
  );
};
