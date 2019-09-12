import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const loginStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 50
}

const title1Style = {
    color: '#FFFF99',
    fontSize: 50,
    marginBottom: 20
}

const title2Style = {
    color: 'white',
    fontSize: 50,
    marginBottom: 20
}

const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
}

const textStyle = {
    color: 'white',
    fontSize: 22,
    minWidth: '90%',
    textAlign: 'left',
    marginBottom: 10
}

const inputStyle = {
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    minWidth: '95%',
    paddingLeft: "5%",
    paddingRight: '5%',
    borderRadius: 20,
    fontSize: 18,
    marginBottom: 20
}

const buttonStyle = {
    marginTop: 20
}

const recoverStyle = {
    color: '#FFFF99',
    textDecorationLine: 'underline',
    marginTop: 30,
    fontSize: 18,
    paddingBottom: 3
}

const Login = (props) => {
    return(
        <View style={loginStyle}>
            <View style={rowStyle}>
                <Text style={title1Style}>Ponto</Text>
                <Text style={title2Style}>App</Text>
            </View>
        
            <Text style={textStyle}>Email:</Text>
            <TextInput placeholder="Email" style={inputStyle}></TextInput>
            <Text style={textStyle}>Senha:</Text>
            <TextInput placeholder="Senha" style={inputStyle}></TextInput>

            <Button title="Entrar" color="darkgray" size={22} style={buttonStyle}></Button>
            <Button title="Cadastrar-se" color="darkgray"  size={22} marginTop={20} style={buttonStyle}></Button>

            <Text style={recoverStyle}>Esqueceu a senha ?</Text>
        </View>
    );
}

export default Login;