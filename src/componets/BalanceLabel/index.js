/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Colors from '../../styles/Colors';
import LinearGradient from 'react-native-linear-gradient';

const BalanceLabel = ({onNewReportPress}) => {
  return (
    <View style={styles.panel}>
    <LinearGradient colors={[Colors.violet, Colors.blue]}style={styles.container}>
      <Text style={styles.panel}>Vision</Text>
      <Text style={styles.value}>Para onde você quer ir?</Text>
    </LinearGradient>
    <TouchableOpacity style={styles.buttonA} onPress={onNewReportPress}>
      <Text style={styles.label}>Bloco A</Text>
    </TouchableOpacity>
    <View>
      <TouchableOpacity style={styles.buttonB} onPress={onNewReportPress}>
        <Text style={styles.label}>Bloco B</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonC} onPress={onNewReportPress}>
        <Text style={styles.label}>Bloco C</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonD} onPress={onNewReportPress}>
        <Text style={styles.label}>Bloco D</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonE} onPress={onNewReportPress}>
        <Text style={styles.label}>Bloco E</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonF} onPress={onNewReportPress}>
        <Text style={styles.label}>Bloco F</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonP} onPress={onNewReportPress}>
        <Text style={styles.label}>Protocolo</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonBi} onPress={onNewReportPress}>
        <Text style={styles.label}>Biblioteca</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonCo} onPress={onNewReportPress}>
        <Text style={styles.label}>Cores</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.buttonG} onPress={onNewReportPress}>
        <Text style={styles.label}>CGTI</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding espaçamento interno, margin espaçamento externo
    alignItems: 'center',
    //paddingVertical: 10,
  },
  panel: {
    color: Colors.white,
    fontSize: 30,
    //color: Colors.black,
    //backgroundColor: Colors.background,
  },
  label:{
    fontSize: 30,
    color: Colors.black,
  },
  value:{
    fontSize:39,
    marginTop: 10,
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
  buttonP: {
    backgroundColor: Colors.white,
    width: 140,
    height: 110,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 30,
  },
  buttonBi: {
    backgroundColor: Colors.white,
    width: 110,
    height: 110,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
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
  buttonCo: {
    backgroundColor: Colors.white,
    width: 110,
    height: 110,
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: -235,
    marginHorizontal: 270,
  },
  buttonG: {
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
export default BalanceLabel;
