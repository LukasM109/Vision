/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
//import BalancePanelChart from './BalancePanelChart';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
//import Icon from 'react-native-vector-icons/FontAwesome';
import BalancePanelAddressPicker from './BalancePanelAddressPicker';

const BalancePanel = ({onNewEntryPress}) => {
  return (
    <View style={styles.container}>
    <LinearGradient colors={[Colors.violet, Colors.blue]}
    style={styles.panel}>
      <BalancePanelLabel />
    </LinearGradient>
    <TouchableOpacity style={styles.buttonA} onPress={onNewEntryPress}>
      <Text>Bloco A</Text>
    </TouchableOpacity>
    <View>
      <TouchableOpacity style={styles.buttonB}>
        <Text>Bloco B</Text>
      </TouchableOpacity>
    </View>
    <View>
      <BalancePanelAddressPicker />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  panel: {
    paddingVertical: 10,
  },
  buttonA: {
    backgroundColor: Colors.green,
    width: 100,
    height: 100,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15,
  },
  buttonB: {
    backgroundColor: Colors.green,
    width: 100,
    height: 100,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 15,
  },
  buttonGPS: {
    backgroundColor: Colors.green,
    width: 100,
    height: 100,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 15,
  },
});

export default BalancePanel;
