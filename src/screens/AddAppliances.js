import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CONFIG} from '../constants/config.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AddAppliances = ({navigation}) => {
  const [rooms, setRooms] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    _getRooms();
  }, []);

  const _getRooms = async () => {
    const user = await AsyncStorage.getItem('user');

    const user_id = JSON.parse(user).results[0].user_id;
    const response = await fetch(
      `http://${CONFIG.IP}:${CONFIG.PORT}/config/getRoomsAssignedToUser?user_id=${user_id}`,
    );
    const result = await response.json();
    if (result.success === 1) {
      setRooms(result.results);
    }
    setLoading(false);
  };

  const _navigationHandler = room_name => {
    navigation.navigate('AddApplianceToRoomScreen', {room: room_name});
  };
  const _renderRooms = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.RoomContainer}
        onPress={() => _navigationHandler(item.room)}>
        <Text style={styles.RoomText}>{item.room}</Text>
        <Ionicons name="arrow-redo" size={24} color={COLORS.White} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.HeaderText}>Add Appliances</Text>
      <Text style={styles.HeaderDescription}>
        Add multiple appliances you want to manage
      </Text>
      <View style={styles.RoomsContainer}>
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.Primary} />
        ) : !rooms ? (
          <Text>No rooms created.</Text>
        ) : (
          <FlatList
            data={rooms}
            keyExtractor={item => item.id}
            renderItem={_renderRooms}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  HeaderText: {
    color: COLORS.Primary,
    fontFamily: FONTS.Primary,
    fontSize: 20,
    margin: 10,
  },
  HeaderDescription: {
    fontFamily: FONTS.Primary,
    color: COLORS.Gray,
    margin: 10,
  },
  RoomsContainer: {
    borderWidth: 1,
    borderColor: COLORS.Primary,
    width: SIZES.Width * 0.8,
    height: SIZES.Height * 0.75,
    margin: 10,
    padding: 20,
    borderRadius: 5,
  },
  RoomContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.Primary,
    margin: 5,
    borderRadius: 5,
  },
  RoomText: {
    color: COLORS.White,
    fontFamily: FONTS.Primary,
    fontSize: 15,
  },
  Seperator: {
    borderWidth: 1,
    borderColor: COLORS.Primary,
  },
  DevicesIndicatorText: {
    padding: 5,
    color: COLORS.Primary,
    backgroundColor: COLORS.White,
    marginLeft: 10,
    borderRadius: SIZES.Height * 1,
    alignSelf: 'center',
  },
});
