import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = (props) => {
    const {openDrawer, goBack} = props;
    
     return(
        <View>
            <Text>Profiile</Text>
            <Button title="MENU" onPress={() => {openDrawer();}} ></Button>
            <Button title="VOLTAR" onPress={() => {goBack();}}></Button>
        </View>
     );
}

const style = StyleSheet.create({

});

export default Profile;