import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './navigation/Main.navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
