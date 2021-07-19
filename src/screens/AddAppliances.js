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
    {id: 1, name: 'Basement'},
    {id: 2, name: 'bathroom'},
    {id: 3, name: 'Bedroom'},
    {id: 4, name: 'Dining Room'},
    {id: 5, name: 'Dressing Room'},
  ];

  const _renderRooms = ({item}) => {
    return (
      <View style={styles.RoomContainer}>
        <Text style={styles.RoomText}>{item.name}</Text>
        <TouchableOpacity>
          <Ionicons name="arrow-redo" size={24} color={COLORS.Primary} />
        </TouchableOpacity>
      </View>
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
  },
  RoomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  RoomText: {
    color: COLORS.Primary,
  },
  Seperator: {
    borderWidth: 1,
    borderColor: COLORS.Primary,
  },
});
