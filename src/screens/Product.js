/* eslint-disable react/jsx-no-duplicate-props */
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {COLORS, SIZES, FONTS} from '../constants/theme';

export const Product = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const Products = [
    {id: 1, name: 'Device 1', type: 'R12/32A', switches: 12, amp: '32A'},
    {id: 2, name: 'Device 2', type: 'R6/32A', switches: 6, amp: '32A'},
    {id: 3, name: 'Device 3', type: 'R1/32A', switches: 1, amp: '32A'},
  ];

  const _navigationHandler = screen_name => {
    navigation.navigate(screen_name);
  };

  const renderProducts = ({item}) => (
    <View style={styles.ProductContainer}>
      <View style={styles.ProductInfoContainer}>
        <Text style={styles.ProductName}>{item.name}</Text>
        <View style={styles.ProductTypeContainer}>
          <Text style={styles.ProductTypeText}>{item.type}</Text>
        </View>
        <View style={styles.ConfigContainer}>
          <Text>Switches</Text>
          <Text>{item.switches}</Text>
        </View>
        <View style={styles.ConfigContainer}>
          <Text>Amp</Text>
          <Text>{item.amp}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.SelectProductBtn}>
        <Text style={styles.SelectText}>Select</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.Container}>
      <View style={styles.MainContainer}>
        <FlatList
          numColumns={2}
          data={Products}
          keyExtractor={item => item.id}
          renderItem={renderProducts}
        />
        <TouchableOpacity
          style={styles.AddDevicesBtn}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.AddDevicesText}>Add Devices</Text>
        </TouchableOpacity>
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
    top: 100,
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
});
