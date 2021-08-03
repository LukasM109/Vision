/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../styles/Colors';

const BalancePanelAddressPicker = () => {
  return (
  <View>
  <View>
      <TouchableOpacity style={styles.buttonGPS}>
      <Icon name="map" size={30} color={Colors.white} />
      </TouchableOpacity>
  </View>
  <View>
  <TouchableOpacity style={styles.buttonCAM}>
  <Icon name="camera" size={30} color={Colors.white} />
  </TouchableOpacity>
</View>
</View>
  );
};

const styles = StyleSheet.create({
    buttonGPS:{
    backgroundColor: Colors.black,
    width: 100,
    height: 100,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 30,
    },
    buttonCAM:{
    backgroundColor: Colors.black,
    width: 100,
    height: 100,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: -103,
    marginHorizontal: 270,
    },
});

export default BalancePanelAddressPicker;
