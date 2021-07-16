import React from 'react';
import {View, Image} from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
    );
  }
}

const styles = {
  logo: {
    height: 20,
    width: 20,
  },
};
