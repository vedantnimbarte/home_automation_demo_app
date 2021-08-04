import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {CONFIG} from '../constants/config';
import {COLORS, FONTS, SIZES} from '../constants/theme';

export const QRCode = ({navigation}) => {
  const [status, setStatus] = React.useState('Scanning');
  const [loading, setLoading] = React.useState(true);

  const onSuccess = async e => {
    let data = e.data.split('|');
    let date = new Date().toISOString().slice(0, 10);
    let formattedDate = date.split('-');
    let created_at = `${formattedDate[0]}/${formattedDate[1]}/${formattedDate[2]}`;

    const response = await fetch(
      `http://${CONFIG.IP}:${CONFIG.PORT}/config/addDeviceToInventory?device=${data[0]}&type=${data[1]}&no_of_relays=${data[2]}&amp=${data[3]}&serial=${data[4]}&date=${created_at}`,
    ).catch(error => {
      ToastAndroid.show('Network request failed.', ToastAndroid.LONG);
      navigation.goBack();
    });
    const result = await response.json();
    if (result.success === 1) {
      setLoading(false);
      setStatus(result.message);
      ToastAndroid.show(`${result.message}`, ToastAndroid.LONG);
      setTimeout(() => {
        navigation.goBack();
      }, 2000);
    } else {
      ToastAndroid.show('Unable to add device', ToastAndroid.LONG);
    }
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <Text style={styles.centerText}>
          Place QR Code inside the window to register the device
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>
            {loading ? (
              <ActivityIndicator color={COLORS.Primary} size="large" />
            ) : (
              `Status: ${status}`
            )}
          </Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
