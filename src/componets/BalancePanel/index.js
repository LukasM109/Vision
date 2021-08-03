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
      <Text style={styles.label}>Bloco A</Text>
    </TouchableOpacity>
    <View>
      <TouchableOpacity style={styles.buttonB} onPress={onNewEntryPress}>
        <Text style={styles.label}>Bloco B</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonC} onPress={onNewEntryPress}>
        <Text style={styles.label}>Bloco C</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonD} onPress={onNewEntryPress}>
        <Text style={styles.label}>Bloco D</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonE} onPress={onNewEntryPress}>
        <Text style={styles.label}>Bloco E</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonF} onPress={onNewEntryPress}>
        <Text style={styles.label}>Bloco F</Text>
      </TouchableOpacity>
    </View>
    <View>
      <BalancePanelAddressPicker />
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
  label: {
    fontSize: 26,
  },
  panel: {
    paddingVertical: 10,
  },
  buttonA: {
    backgroundColor: Colors.white,
    width: 110,
    height: 110,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 30,
  },
  buttonB: {
    backgroundColor: Colors.white,
    width: 110,
    height: 110,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 30,
  },
  buttonC: {
    backgroundColor: Colors.white,
    width: 110,
    height: 110,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 30,
  },
  buttonD: {
    backgroundColor: Colors.white,
    width: 110,
    height: 110,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: -377,
    marginHorizontal: 270,
  },
  buttonE: {
    backgroundColor: Colors.white,
    width: 110,
    height: 110,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: -245,
    marginHorizontal: 270,
  },
  buttonF: {
    backgroundColor: Colors.white,
    width: 110,
    height: 110,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: -113,
    marginHorizontal: 270,
  },
});

export default BalancePanel;
