import React from 'react';
import {View, Image} from 'react-native';
import {SIZES} from '../constants/theme';

export const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);
  });
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
