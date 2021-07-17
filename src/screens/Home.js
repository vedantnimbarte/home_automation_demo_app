import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {SIZES, COLORS, FONTS} from '../constants/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Home = ({navigation}) => {
  const MenuItems = [
    {
      id: 1,
      title: 'Create User',
      description:
        'Use this option to create and configure a user to the database',
      icon: <FontAwesome name="user-o" size={24} color={COLORS.White} />,
      screen_name: 'CreateUserScreen',
    },
    {
      id: 2,
      title: 'Add Product',
      description:
        'Scan to an existing or select add a product from the Inventory',
      icon: <MaterialIcons name="devices" size={24} color={COLORS.White} />,
      screen_name: 'AddProductScreen',
    },
    {
      id: 3,
      title: 'Configure Home',
      description: 'Follow the meu to setup our home to the system',
      icon: <FontAwesome name="home" size={24} color={COLORS.White} />,
      screen_name: 'ConfigureHomeScreen',
    },
    {
      id: 4,
      title: 'Add Appliances',
      description: 'Add multiple appliances you want to manage',
      icon: (
        <MaterialCommunityIcons
          name="home-lightbulb-outline"
          size={24}
          color={COLORS.White}
        />
      ),
      screen_name: 'AddAppliancesScreen',
    },
    {
      id: 5,
      title: 'Settings',
      description: 'Quick settings',
      icon: <Feather name="settings" size={24} color={COLORS.White} />,
      screen_name: 'SettingsScreen',
    },
  ];

  const _renderMenu = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.MenuItem}
        onPress={() => _navigationHandler(item.screen_name)}>
        <View style={styles.IconContainer}>
          <Text>{item.icon}</Text>
        </View>
        <Text style={styles.MenuTitle}>{item.title}</Text>
        <Text style={styles.MenuDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  const _navigationHandler = screen_name => {
    navigation.navigate(screen_name);
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Let's Start</Text>
        <Text style={styles.HeaderDescription}>
          lorem ipsum dolor amet consectetuer
        </Text>
      </View>
      <View style={styles.gridMenuContainer}>
        <FlatList
          numColumns={2}
          data={MenuItems}
          keyExtractor={item => item.id}
          renderItem={_renderMenu}
          style={{marginBottom: SIZES.Height / 30}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 10,
  },
  HeaderContainer: {
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  HeaderText: {
    fontFamily: FONTS.Primary,
    fontSize: 25,
    color: COLORS.DarkGray,
    fontWeight: '900',
  },
  HeaderDescription: {
    color: COLORS.Gray,
    fontFamily: FONTS.Primary,
  },
  gridMenuContainer: {
    marginTop: SIZES.Height / 40,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  MenuItem: {
    backgroundColor: COLORS.Primary,
    margin: 5,
    width: SIZES.Width * 0.45,
    height: SIZES.Height * 0.25,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
  },
  MenuTitle: {
    color: COLORS.White,
    fontFamily: FONTS.Primary,
    fontSize: 20,
  },
  MenuDescription: {
    fontFamily: FONTS.Primary,
    color: COLORS.White,
    marginTop: 10,
    fontSize: 12,
  },
  IconContainer: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: SIZES.Height * 1,
    borderColor: COLORS.White,
  },
});
