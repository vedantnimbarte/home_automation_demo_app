/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Switch,
  ToastAndroid,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONFIG} from '../constants/config.js';

export const AddApplianceToRoom = ({route, navigation}) => {
  const [rooms, setRooms] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [appliance_name, setApplianceName] = useState();
  const [relay, setRelay] = useState();
  const [switchStatus, SetSwitchStatus] = useState(false);
  const [dimmerStatus, setDimmerStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [deviceType, setDeviceType] = useState();

  const toggleSwitch = () => SetSwitchStatus(previousState => !previousState);
  const toggleDimmer = () => setDimmerStatus(previousState => !previousState);

  const _renderDevices = ({item}) => {
    return (
      <View style={styles.DeviceContainer}>
        <Text style={styles.DeviceName}>{item.name}</Text>
        <Text style={styles.DeviceConfig}>Relay: {item.relay}</Text>
        <View>
          <Text style={styles.DeviceConfig}>
            Switch: {item.switch ? 'On' : 'Off'}
          </Text>
          <Text style={styles.DeviceConfig}>
            Dimmer: {item.dimmer ? 'On' : 'Off'}
          </Text>
        </View>
      </View>
    );
  };

  const _assignDevice = async () => {
    const user = await AsyncStorage.getItem('user');

    const user_id = JSON.parse(user).results[0].user_id;
    const response = await fetch(
      `http://${CONFIG.IP}:${CONFIG.PORT}/config/assignAppliance?user_id=${user_id}&appliance=${appliance_name}&switch_status=${switchStatus}&dimmer_status=${dimmerStatus}&relay=${relay}&room_name=${route.params.room}&device_type=${deviceType}`,
    );
    const result = await response.json();
    if (result.success === 1) {
      ToastAndroid.show(`${result.message}`, ToastAndroid.LONG);
    } else {
      ToastAndroid.show(
        'Unable to add room. Please try again',
        ToastAndroid.LONG,
      );
    }
    setApplianceName();
    SetSwitchStatus();
    setDimmerStatus();
    setRelay();
    setLoading(false);
    setModalVisible(!modalVisible);
  };
  const _navigationHandler = screen_name => {
    navigation.navigate(screen_name);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.MainContainer}>
        <Text style={styles.HeaderText}>Room: {route.params.room}</Text>
        {!rooms ? (
          <Text
            style={{
              fontFamily: FONTS.Primary,
              color: COLORS.DarkGray,
              margin: 10,
            }}>
            No appliances detected
          </Text>
        ) : (
          <FlatList
            numColumns={2}
            data={rooms}
            keyExtractor={item => item.id}
            renderItem={_renderDevices}
            style={styles.AppliancesContainer}
          />
        )}
        <TouchableOpacity
          style={styles.AddApplianceBtn}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.AddApplianceText}>Add Appliance</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={styles.ModalContainer}>
        <View style={styles.InnerModalContainer}>
          <Text style={styles.HeaderTextModal}>Add Appliances</Text>
          <Text style={styles.HeaderDescriptionModal}>
            Enter the appliance name you want
          </Text>

          <View style={styles.MainPickerContainer}>
            <View style={styles.InnerPickerContainer}>
              <Text style={styles.Label}>Appliances</Text>
              <View style={styles.AppliancePicker}>
                <Picker
                  selectedValue={appliance_name}
                  onValueChange={(itemValue, itemIndex) =>
                    setApplianceName(itemValue)
                  }
                  style={styles.PickerItems}>
                  <Picker.Item label="Select appliance" value="" />
                  <Picker.Item label="Fan" value="fan" />
                  <Picker.Item label="Toaster" value="toaster" />
                  <Picker.Item label="Light Bulb" value="light bulb" />
                  <Picker.Item label="Television" value="television" />
                  <Picker.Item label="Coffee Maker" value="coffee maker" />
                  <Picker.Item label="Rice Cooker" value="rice cooker" />
                  <Picker.Item label="Lamp" value="lamp" />
                  <Picker.Item
                    label="Electric Kettle"
                    value="electric kettle"
                  />
                  <Picker.Item
                    label="Air conditioner"
                    value="air conditioner"
                  />
                  <Picker.Item label="Oven" value="oven" />
                  <Picker.Item label="Dishwasher" value="dishwasher" />
                  <Picker.Item label="Speaker" value="speaker" />
                  <Picker.Item label="Clothes dryer" value="clothes dryer" />
                  <Picker.Item
                    label="Washing machine"
                    value="washing machine"
                  />
                  <Picker.Item label="Refrigerator" value="refrigerator" />
                </Picker>
              </View>
            </View>
            <View style={styles.InnerPickerContainer}>
              <Text style={styles.Label}>Device Type</Text>
              <View style={styles.AppliancePicker}>
                <Picker
                  selectedValue={deviceType}
                  onValueChange={(itemValue, itemIndex) =>
                    setDeviceType(itemValue)
                  }
                  style={styles.PickerItems}>
                  <Picker.Item label="Select device type" value="" />
                  <Picker.Item label="R6/10A" value="R6/10A" />
                  <Picker.Item label="R1/sec" value="R1/sec" />
                  <Picker.Item label="R1/32A" value="R1/32A" />
                  <Picker.Item label="R2/10A" value="R2/10A" />
                </Picker>
              </View>
            </View>
            <View style={styles.InnerPickerContainer}>
              <Text style={styles.Label}>Relays</Text>
              <View style={styles.AppliancePicker}>
                <Picker
                  selectedValue={relay}
                  onValueChange={(itemValue, itemIndex) => setRelay(itemValue)}
                  style={styles.PickerItems}>
                  <Picker.Item label="Select relay" value="" />
                  <Picker.Item label="r1" value="r1" />
                  <Picker.Item label="r2" value="r2" />
                  <Picker.Item label="r3" value="r3" />
                  <Picker.Item label="r4" value="r4" />
                  <Picker.Item label="r5" value="r5" />
                  <Picker.Item label="r6" value="r6" />
                </Picker>
              </View>
            </View>
            <View style={styles.MainSwitchContainer}>
              <View style={styles.SwitchContainer}>
                <Text style={styles.Label}>Switch</Text>
                <Switch
                  trackColor={{false: '#767577', true: COLORS.Primary}}
                  thumbColor={COLORS.White}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={switchStatus}
                />
              </View>
              <View style={styles.SwitchContainer}>
                <Text style={styles.Label}>Dimmer</Text>
                <Switch
                  trackColor={{false: '#767577', true: COLORS.Primary}}
                  thumbColor={COLORS.White}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleDimmer}
                  value={dimmerStatus}
                />
              </View>
            </View>
          </View>
          <View style={styles.BtnContainer}>
            <TouchableOpacity
              style={styles.CancelBtn}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.BtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SubmitBtn}
              onPress={() => _assignDevice()}>
              <Text style={styles.BtnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
  },
  HeaderText: {
    fontFamily: FONTS.Primary,
    color: COLORS.Primary,
    fontSize: 20,
    margin: 10,
  },
  AddApplianceBtn: {
    backgroundColor: COLORS.Primary,
    width: SIZES.Width * 0.9,
    height: SIZES.Height / 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  AddApplianceText: {
    color: COLORS.White,
    fontFamily: FONTS.Primary,
  },
  DeviceContainer: {
    backgroundColor: COLORS.Primary,
    borderRadius: 5,
    width: SIZES.Width * 0.4,
    height: SIZES.Height * 0.2,
    margin: 10,
    padding: 20,
  },
  DeviceName: {
    color: COLORS.White,
    fontFamily: FONTS.Primary,
    fontSize: 20,
    margin: 5,
  },
  DeviceConfig: {
    color: COLORS.White,
    fontFamily: FONTS.Primary,
    fontSize: 12,
    margin: 5,
  },
  ModalContainer: {
    // position: 'absolute',
  },
  InnerModalContainer: {
    marginTop: SIZES.Height * 0.1,
    marginLeft: SIZES.Width * 0.1,
    backgroundColor: COLORS.White,
    width: SIZES.Width * 0.8,
    alignItems: 'center',
    height: SIZES.Height * 0.8,
    borderRadius: 5,
    shadowColor: '#000',
    paddingTop: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  HeaderTextModal: {
    fontFamily: FONTS.Primary,
    fontSize: 20,
    color: COLORS.Primary,
  },
  BtnContainer: {
    alignItems: 'center',
    margin: 20,
  },
  CancelBtn: {
    backgroundColor: COLORS.Gray,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.Width * 0.6,
  },
  SubmitBtn: {
    backgroundColor: COLORS.Primary,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.Width * 0.6,
  },
  BtnText: {
    color: COLORS.White,
    fontFamily: FONTS.Primary,
  },
  HeaderDescriptionModal: {
    fontFamily: FONTS.Primary,
    fontSize: 15,
    color: COLORS.Gray,
  },
  AppliancePicker: {
    borderRadius: 5,
    borderColor: COLORS.Primary,
    borderWidth: 1,
    width: SIZES.Width * 0.5,
  },
  PickerItems: {
    color: COLORS.Primary,
  },
  Label: {
    alignSelf: 'flex-start',
    color: COLORS.Primary,
    marginTop: 5,
    marginBottom: 10,
  },
  MainPickerContainer: {
    marginTop: 5,
  },
  InnerPickerContainer: {
    marginTop: 10,
  },
  MainSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
