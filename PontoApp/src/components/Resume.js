import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity1 } from 'react-native';

const Resume = (props) => {
    const { navigation } = props; 

    return(
        <View>
            <Text>Resume</Text>
            {/* <Button onPress={() => {navigation.openDrawer();}} title="-"></Button> */}
        </View>
    );
}

const style = StyleSheet.create({

});

export default Resume;