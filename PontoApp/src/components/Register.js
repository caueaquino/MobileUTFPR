import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Register = (props) => {
    return(
      <View style={style.register} >
          <Text>aoba foi poha</Text>
      </View>  
    );
}

const style = StyleSheet.create({
    register: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    }
});

export default Register;

