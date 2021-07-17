import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {SIZES, COLORS, FONTS} from '../constants/theme';

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flex: 1}} bounces={false}>
          <View style={styles.MainContainer}>
            <View style={styles.LoginContainer}>
              <View style={styles.LogoContainer}>
                <Image
                  source={require('../assets/logo.png')}
                  style={styles.Logo}
                />
              </View>
              <View style={styles.HeaderTextContainer}>
                <Text style={styles.HeaderText}>Make Living easy</Text>
                <Text style={styles.HeaderMessage}>
                  Something revolutionary for your home
                </Text>
              </View>
              <TextInput
                placeholder="Email"
                style={styles.InputField}
                placeholderTextColor={COLORS.Primary}
              />
              <TextInput
                placeholder="Password"
                style={styles.InputField}
                placeholderTextColor={COLORS.Primary}
              />
              <TouchableOpacity style={styles.LoginButton}>
                <Text style={styles.LoginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: COLORS.White,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  LoginContainer: {
    width: SIZES.Width * 0.8,
    // alignItems: 'center',
  },
  LogoContainer: {
    margin: 20,
  },
  Logo: {
    height: SIZES.Height * 0.16,
    width: SIZES.Width * 0.31,
  },
  HeaderTextContainer: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  HeaderText: {
    color: COLORS.Gray,
    fontSize: 15,
    fontFamily: FONTS.Primary,
    marginTop: 5,
    marginBottom: 5,
  },
  HeaderMessage: {
    fontSize: 20,
    color: COLORS.DarkGray,
    fontFamily: FONTS.Primary,
    marginTop: 5,
    marginBottom: 5,
  },
  InputField: {
    borderWidth: 1,
    borderColor: COLORS.Primary,
    borderRadius: 5,
    margin: 5,
    padding: 10,
  },
  LoginButton: {
    backgroundColor: COLORS.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
  },
  LoginText: {
    color: COLORS.White,
    fontSize: 15,
    fontFamily: FONTS.Primary,
  },
});
