/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import BalancePanel from '../../componets/BalancePanel';
import BalanceLabel from '../../componets/BalanceLabel';
//import NewEntry from '../NewEntry';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')}/>
      <BalanceLabel onNewReportPress={() => navigation.navigate('Report')} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Main;
