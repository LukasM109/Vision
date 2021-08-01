/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../styles/Colors';

const BalancePanelAddressPicker = () => {
  return (
  <View>
      <TouchableOpacity style={styles.button}>
      <Icon name="map" size={30} color={Colors.white} />
      </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.green,
    width: 100,
    height: 100,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 15,
    },
});

export default BalancePanelAddressPicker;
