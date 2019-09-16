import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const About = (props) => {
    const {openDrawer, goBack} = props;

    return(
        <View>
            <Text>About</Text>
            <Button title="MENU" onPress={() => {openDrawer();}} ></Button>
            <Button title="VOLTAR" onPress={() => {goBack();}}></Button>
        </View>
    );
}

const style =  StyleSheet.create({

});

export default About;