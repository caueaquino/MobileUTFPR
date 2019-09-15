import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Main = (props) => {
    return(
        <View style={style.main}>
          <Text>Main Component</Text>  
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        backgroundColor: 'black',
        height: '100%',
    }
});

export default Main;