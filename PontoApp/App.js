import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';

const App = createAppContainer(
    createStackNavigator({
        Login: LoginPage,
        Register: RegisterPage,
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    })
);

export default App;