import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS, SIZES} from '../constants/theme';

export const Add_Product = ({navigation}) => {
  const _navigationHandler = screen_name => {
    navigation.navigate(screen_name);
  };
  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Add Product</Text>
        <Text style={styles.HeaderDescription}>
          Scan to an existing or select add a product from the Inventory
        </Text>
      </View>
      <View style={styles.InnerContainer}>
        <TouchableOpacity style={styles.CameraContainer}>
          <FontAwesome name="camera" size={50} color={COLORS.Gray} />
        </TouchableOpacity>
        <Text style={styles.SeperatorText}>OR</Text>
        <TouchableOpacity
          style={styles.AddDeviceButton}
          onPress={() => _navigationHandler('ProductScreen')}>
          <Text style={styles.AddDeviceText}>Add Device Manually</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  CameraContainer: {
    borderWidth: 1,
    borderColor: COLORS.Gray,
    borderRadius: SIZES.Height * 1,
    padding: 20,
  },
  SeperatorText: {
    margin: 20,
    color: COLORS.Gray,
  },
  InnerContainer: {
    padding: 10,
    alignItems: 'center',
    top: SIZES.Height * 0.15,
  },
  AddDeviceButton: {
    backgroundColor: COLORS.Primary,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.Width * 0.7,
    borderRadius: 5,
  },
  AddDeviceText: {
    color: COLORS.White,
    fontFamily: FONTS.Primary,
    fontSize: 15,
  },
  HeaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  HeaderText: {
    fontFamily: FONTS.Primary,
    color: COLORS.Primary,
    fontSize: 20,
  },
  HeaderDescription: {
    color: COLORS.DarkGray,
    fontFamily: FONTS.Primary,
    margin: 10,
  },
});
