/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalanceLabel = () => {
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
    fontSize: 40,
  },
  value: {
    fontSize: 50,
  },
});
export default BalanceLabel;
