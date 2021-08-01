/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import { Colors } from 'react-native/Libraries/NewAppScreen';

const BalancePanelLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Vision</Text>
      <Text style={styles.value}>Onde você está?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding espaçamento interno, margin espaçamento externo
    alignItems: 'center',
  },
  label:{
    fontSize: 30,
    color: Colors.white,
  },
  value:{
    fontSize:40,
  },
});
export default BalancePanelLabel;
