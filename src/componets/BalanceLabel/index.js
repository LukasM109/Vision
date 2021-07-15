/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalanceLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Para onde você quer ir?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
  },
});
export default BalanceLabel;
