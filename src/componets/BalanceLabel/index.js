/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalanceLabel = () => {
  return (
    <View>
      <Text style={styles.label}>Balance Label</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding espaçamento interno, margin espaçamento externo
    flex: 1,
  },
});
export default BalanceLabel;
