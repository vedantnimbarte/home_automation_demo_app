import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const AddAppliances = () => {
  const [room_name, setRoomName] = useState();
  const [rooms, setRooms] = useState();

  useEffect(() => {
    setRooms(Rooms);
  }, []);

  const Rooms = [
    {id: 1, name: 'Basement', deviceCount: 1},
    {id: 2, name: 'bathroom', deviceCount: 4},
    {id: 3, name: 'Bedroom', deviceCount: 0},
    {id: 4, name: 'Dining Room', deviceCount: 0},
    {id: 5, name: 'Dressing Room', deviceCount: 2},
  ];

  const _renderRooms = ({item}) => {
    return (
      <TouchableOpacity style={styles.RoomContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.RoomText}>{item.name}</Text>
          <Text style={styles.DevicesIndicatorText}>
            {item.deviceCount} devices
          </Text>
        </View>
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
        <FlatList
          data={rooms}
          keyExtractor={item => item.id}
          renderItem={_renderRooms}
        />
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
    borderWidth: 1,
    alignSelf: 'center',
  },
});
