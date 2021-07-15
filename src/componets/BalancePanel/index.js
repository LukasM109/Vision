/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    flex: 1,
    alignItems: 'center',
  },
  label: {
      fontSize: 18,
  },
  value: {
      fontSize: 22,
  },
});

export default BalancePanelLabel;