/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
//import BalanceLabel from '../../componets/BalanceLabel';
import BalancePanelChart from '../../componets/BalancePanel/BalancePanelChart';
//import BalancePanelLabel from '../../componets/BalancePanel/BalancePanelLabel';

const Report = () => {
  return (
    <View>
      <BalancePanelChart />
    </View>
  );
};

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Report;
