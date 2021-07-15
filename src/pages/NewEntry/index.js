/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BalanceLabel from '../../componets/BalanceLabel';

const NewEntry = () => {
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
          <Button title="Bloco A" />
          <Button title="Bloco B" />
          <Button title="Bloco C" />
          <Button title="Bloco D" />
          <Button title="Bloco E" />
          <Button title="Bloco F" />
      </View>
    <View>
        <Button title="GPS" />
        <Button title="Camera" />
    </View>

    </View>
  );
};
//import BalanceLabel from '../../componets/BalanceLabel'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
export default NewEntry;
