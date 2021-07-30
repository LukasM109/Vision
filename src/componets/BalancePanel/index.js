/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalancePanelLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Para onde você quer ir?</Text>
      <View />
    <View />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 35,
    alignItems: 'center',
},
value: {
    fontSize: 22,
},
});

export default BalancePanelLabel;
