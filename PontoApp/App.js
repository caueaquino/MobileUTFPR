import React, {Fragment} from 'react';
import { View, Text } from 'react-native';

import Login from './src/components/Login';

const viewStyle = {
    backgroundColor: "#666666",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
}

const App = () => {
  return (
    
    <View style={viewStyle}>
      <Login></Login>
    </View>
  );
};

export default App;
