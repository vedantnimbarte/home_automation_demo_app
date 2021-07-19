import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Switch,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {Picker} from '@react-native-picker/picker';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';

export const AddApplianceToRoom = ({route, navigation}) => {
  const [appliances, setAppliances] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [appliance_name, setApplianceName] = useState();
  const [relay, setRelay] = useState();
  const [switchStatus, SetSwitchStatus] = useState(false);
  const [dimmerStatus, setDimmerStatus] = useState(false);

  useEffect(() => {
    setAppliances(Appliances);
  }, []);

  const toggleSwitch = () => SetSwitchStatus(previousState => !previousState);
  const toggleDimmer = () => setDimmerStatus(previousState => !previousState);

  const Appliances = [
    {id: 1, name: 'Fan', relay: 'R6', switch: true, dimmer: true},
    {id: 2, name: 'TV', relay: 'R12', switch: true, dimmer: false},
  ];

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
            Switch: {item.dimmer ? 'On' : 'Off'}
          </Text>
        </View>
      </View>
    );
  };

  const _navigationHandler = screen_name => {
    navigation.navigate(screen_name);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.MainContainer}>
        <Text style={styles.HeaderText}>Room: {route.params.room}</Text>
        {!appliances ? (
          <Text style={styles.HeaderText}>No appliances detected</Text>
        ) : (
          <FlatList
            numColumns={2}
            data={appliances}
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
                  <Picker.Item label="Fan" value="fan" />
                  <Picker.Item label="TV" value="tv" />
                </Picker>
              </View>
            </View>
            <View style={styles.InnerPickerContainer}>
              <Text style={styles.Label}>Appliances</Text>
              <View style={styles.AppliancePicker}>
                <Picker
                  selectedValue={relay}
                  onValueChange={(itemValue, itemIndex) => setRelay(itemValue)}
                  style={styles.PickerItems}>
                  <Picker.Item label="R12" value="R12" />
                  <Picker.Item label="R6" value="R6" />
                  <Picker.Item label="R1" value="R1" />
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
              onPress={() => _navigationHandler('HomeScreen')}>
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
    marginTop: SIZES.Height * 0.17,
    marginLeft: SIZES.Width * 0.1,
    backgroundColor: COLORS.White,
    width: SIZES.Width * 0.8,
    alignItems: 'center',
    height: SIZES.Height * 0.65,
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
