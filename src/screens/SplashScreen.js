import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {SIZES} from '../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SplashScreen = ({navigation}) => {
  useEffect(() => {
    _validateUser();
  });

  const _validateUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      navigation.navigate('HomeNavigator');
    } else {
      navigation.navigate('LoginScreen');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    padding: 10,
    top: SIZES.Height * 0.3,
  },
  logo: {
    height: SIZES.Height * 0.21,
    width: SIZES.Width * 0.4,
  },
};
