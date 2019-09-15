import React from 'react';
import { View } from 'react-native';

import Login from '../components/Login';

const LoginPage = (props) => {
  return (
    <View>
      <Login registerRoute={() => props.navigation.navigate('Register')} />
    </View>
  );
};

export default LoginPage;
