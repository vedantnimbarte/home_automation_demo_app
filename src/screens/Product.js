/* eslint-disable react/jsx-no-duplicate-props */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {COLORS, SIZES, FONTS} from '../constants/theme';
import {CONFIG} from '../constants/config.js';

export const Product = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inventory, setInventory] = useState();
  const [isLoading, setLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState();

  const devices = [];
  useEffect(() => {
    _getAllDevices();
  }, []);

  const _getAllDevices = async () => {
    const response = await fetch(
      `http://${CONFIG.IP}:${CONFIG.PORT}/config/getAllDevices`,
    );
    const result = await response.json();
    if (result.success === 1) {
      setInventory(result.results);
      setLoading(false);
    }
  };

  const _selectDevice = serial_no => {
    setSelectedDevice(serial_no);
  };

  const renderProducts = ({item}) => (
    <View style={styles.ProductContainer}>
      <View style={styles.ProductInfoContainer}>
        <Text style={styles.ProductName}>{item.device}</Text>
        <View style={styles.ProductTypeContainer}>
          <Text style={styles.ProductTypeText}>{item.type}</Text>
        </View>
        <View style={styles.ConfigContainer}>
          <Text>Switches</Text>
          <Text>{item.no_of_relays}</Text>
        </View>
        <View style={styles.ConfigContainer}>
          <Text>Amp</Text>
          <Text>{item.amp}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.SelectProductBtn}
        onPress={() => _selectDevice(item.serial_no)}>
        <Text style={styles.SelectText}>
          {selectedDevice === item.serial_no ? 'Selected' : 'Select'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.Container}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Select Products</Text>
      </View>
      <View style={styles.MainContainer}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.Primary} />
        ) : !inventory || inventory === 'undefined' ? (
          <Text>No devices are in the inventory</Text>
        ) : (
          <View>
            <FlatList
              numColumns={2}
              data={inventory}
              keyExtractor={item => item.id}
              renderItem={renderProducts}
            />
            <TouchableOpacity
              style={styles.AddDevicesBtn}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.AddDevicesText}>Add Devices</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        style={styles.ModalContainer}>
        <View style={styles.InnerModalContainer}>
          <Text style={styles.ConfirmText}>
            Are you sure you want to continue?
          </Text>
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
  Container: {
    flex: 1,
  },
  MainContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  ProductContainer: {
    borderColor: COLORS.Primary,
    borderWidth: 2,
    width: SIZES.Width * 0.4,
    height: SIZES.Height * 0.35,
    margin: 10,
  },
  SelectProductBtn: {
    backgroundColor: COLORS.Primary,
    height: SIZES.Height / 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SelectText: {
    color: COLORS.White,
    fontFamily: FONTS.Primary,
  },
  ProductInfoContainer: {
    padding: 20,
  },
  ProductName: {
    fontSize: 15,
    fontFamily: FONTS.Primary,
  },
  ProductTypeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.Height / 10,
    margin: 10,
  },
  ProductTypeText: {
    fontFamily: FONTS.Primary,
    fontSize: 20,
    color: COLORS.Primary,
  },
  ConfigContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AddDevicesBtn: {
    backgroundColor: COLORS.Primary,
    height: SIZES.Height / 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.Width * 0.9,
    borderRadius: 5,
    marginTop: 10,
  },
  AddDevicesText: {
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
    height: SIZES.Height * 0.2,
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
  ConfirmText: {
    fontFamily: FONTS.Primary,
    fontSize: 17,
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
});
