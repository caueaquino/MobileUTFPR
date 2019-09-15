import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';

import PontoPage from './PontoPage';
import ProfilePage from './ProfilePage';
import AboutPage from './AboutPage';

const MainPage = createAppContainer(
  createDrawerNavigator({
    Ponto: PontoPage,
    Profile: ProfilePage,
    About: AboutPage,
  },
  {
    initialRouteName: 'Ponto',
  })
);

export default MainPage;
