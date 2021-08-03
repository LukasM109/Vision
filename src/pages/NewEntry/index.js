/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import BalanceLabel from '../../componets/BalanceLabel';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewEntry = (navigation) => {
  return (
    <View style={styles.container}>
      <BalanceLabel />
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

    </View>
  );
};
//import BalanceLabel from '../../componets/BalanceLabel'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
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
export default NewEntry;
