import {Navigation} from 'react-native-navigation';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import SideMenuScreen from './screens/SideMenuScreen';
import About from './screens/About';
import Contact from './screens/Contact';
import Potfolio from './screens/Potfolio';

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: 'black',
  },
  topBar: {
    background: {
      color: 'white',
    },
    title: {
      color: '#000'
    },
    backButton: {
      color: '#000',
    }
  }
})

Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('SideMenuScreen', () => SideMenuScreen);
Navigation.registerComponent('AboutScreen', () => About);
Navigation.registerComponent('ContactScreen', () => Contact);
Navigation.registerComponent('PotfolioScreen', () => Potfolio);


const stack = {
    children:[
      {
        component: {
          name: 'HomeScreen',
          options: {
            topBar: {
              title: {text: 'Home'},
            }
          }
        }
      }
    ]
}

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: "SideMenuScreen"
          }
        },
        center: {
         stack: {
           id: 'CenterScreen',
           children: [
             {
               component: {
                 name: "HomeScreen",
                 options: {
                  topBar: {
                    leftButtons: {
                      icon: require('./images/menu.png')
                    }
                  }
                 },
               }
             }
           ]
         }
        },
      }
    },
  });
});
