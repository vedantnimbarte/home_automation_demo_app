import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, FONTS} from '../constants/theme';

export const Product = () => {
  const Products = [
    {id: 1, name: 'Device 1', type: 'R12/32A', switches: 12, amp: '32A'},
    {id: 2, name: 'Device 2', type: 'R6/32A', switches: 6, amp: '32A'},
    {id: 3, name: 'Device 3', type: 'R1/32A', switches: 1, amp: '32A'},
  ];

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
    <View style={styles.MainContainer}>
      <FlatList
        numColumns={2}
        data={Products}
        keyExtractor={item => item.id}
        renderItem={renderProducts}
      />
      <TouchableOpacity style={styles.AddDevicesBtn}>
        <Text style={styles.AddDevicesText}>Add Devices</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
