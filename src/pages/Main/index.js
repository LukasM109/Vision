/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import BalanceLabel from '../../componets/BalanceLabel';
import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <Button title="Bloco A" onPress={() => navigation.navigate('NewEntry')} />
      <Button title="Bloco B" onPress={() => navigation.navigate('NewEntry')} />
      <Button title="Bloco C" onPress={() => navigation.navigate('NewEntry')} />
      <Button title="Bloco D" onPress={() => navigation.navigate('NewEntry')} />
      <Button title="Bloco E" onPress={() => navigation.navigate('NewEntry')} />
      <Button title="Bloco F" onPress={() => navigation.navigate('NewEntry')} />
      <View>
        <Button title="GPS" />
        <Button title="Camera" />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
});

export default Main;
