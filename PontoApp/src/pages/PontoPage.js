import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import Resume from  '../components/Resume';
import Ponto from '../components/Ponto';
import Solicitation from '../components/Solicitation';

const PontoPage = (props) => {
  return(
    <View>

      <Resume openDrawer={() => {props.navigation.openDrawer();}} />
      <Button title="teste" onPress={() => {props.navigation.openDrawer();}}></Button>
      <Ponto />
      
      <Solicitation />

    </View>
  );
}

const style = StyleSheet.create({

});

export default PontoPage;
