import React from 'react';
import {View, Text} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>Login</Text>
      </View>
    );
  }
}

const styles = {
  MainContainer: {
    padding: 20,
    height: '100%',
    backgroundColor: 'white',
  },
};
