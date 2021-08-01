/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import BalanceLabel from '../../componets/BalanceLabel';

const NewEntry = () => {
  return (
    <View style={styles.container}>
      <BalanceLabel />

    </View>
  );
};
//import BalanceLabel from '../../componets/BalanceLabel'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default NewEntry;
