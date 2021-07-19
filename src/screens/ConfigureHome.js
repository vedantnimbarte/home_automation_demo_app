import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const ConfigureHome = () => {
  const [modalVisible, setModalVisible] = useState(false);
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

  const _renderRoms = ({item}) => {
    return (
      <View style={styles.RoomContainer}>
        <View>
          <Text style={styles.RoomName}>{item.name}</Text>
        </View>
        <View style={styles.ActionsContainer}>
          <FontAwesome
            name="edit"
            size={24}
            color={COLORS.Primary}
            style={styles.ActionIcons}
          />
          <FontAwesome
            name="trash-o"
            size={24}
            color={COLORS.Primary}
            style={styles.ActionIcons}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Configure Home</Text>
        <Text style={styles.HeaderDescription}>
          Follow the menu to setup your home to the systems
        </Text>
      </View>
      <View style={styles.RoomsContainer}>
        <Text style={styles.HeadingText}>List of Rooms</Text>
        <FlatList
          data={rooms}
          keyExtractor={item => item.id}
          renderItem={_renderRoms}
        />
      </View>
      <TouchableOpacity
        style={styles.AddRoomBtn}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.AddRoomText}>Add Room</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={styles.ModalContainer}>
        <View style={styles.InnerModalContainer}>
          <Text style={styles.HeaderText}>Create Room</Text>
          <Text style={styles.HeaderDescription}>
            Enter the room name you want
          </Text>
          <TextInput
            value={room_name}
            onChangeText={text => setRoomName(text)}
            style={styles.RoomInput}
          />
          <View style={styles.BtnContainer}>
            <TouchableOpacity
              style={styles.CancelBtn}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.BtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SubmitBtn}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.BtnText}>Add Room</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    padding: 20,
    flex: 1,
  },
  HeaderContainer: {
    alignItems: 'center',
  },
  HeaderText: {
    fontFamily: FONTS.Primary,
    fontSize: 20,
    color: COLORS.Primary,
  },
  HeaderDescription: {
    color: COLORS.DarkGray,
    fontFamily: FONTS.Primary,
    margin: 10,
  },
  RoomsContainer: {
    borderWidth: 1,
    borderColor: COLORS.Primary,
    padding: 20,
    margin: 10,
    height: SIZES.Height * 0.7,
  },
  HeadingText: {
    fontSize: 17,
    fontFamily: FONTS.Primary,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  RoomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  RoomName: {
    fontFamily: FONTS.Primary,
  },
  ActionsContainer: {
    flexDirection: 'row',
  },
  ActionIcons: {
    margin: 5,
  },
  AddRoomBtn: {
    backgroundColor: COLORS.Primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.Width * 0.85,
    borderRadius: 5,
    margin: 10,
  },
  AddRoomText: {
    color: COLORS.White,
    fontFamily: FONTS.Primary,
  },
  ModalContainer: {
    position: 'absolute',
  },
  InnerModalContainer: {
    marginTop: SIZES.Height * 0.17,
    marginLeft: SIZES.Width * 0.1,
    backgroundColor: COLORS.White,
    width: SIZES.Width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.Height * 0.3,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  BtnContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  CancelBtn: {
    backgroundColor: COLORS.Gray,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubmitBtn: {
    backgroundColor: COLORS.Primary,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnText: {
    color: COLORS.White,
    fontFamily: FONTS.Primary,
  },
  RoomInput: {
    borderWidth: 1,
    borderColor: COLORS.Primary,
    borderRadius: 5,
    width: SIZES.Width * 0.6,
    color: COLORS.Primary,
    paddingLeft: 10,
  },
});
