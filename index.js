/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
//import App from './App';
//import AppSecond from './AppSecond';
//import Otp  from './Otp';
//import StylingAssignment  from './StylingAssignment';
//import ChangeColor  from './ChangeColor';
import MyContainer from './MyContainer';
import {name as appName} from './app.json';
 import  TabNavigator from './TabNavigator';
import  MyntraTab   from './MyntraTab'
// import MyntraPage from './MyntraPage';
import sliderAssignment from './SliderAssignment';
import ListAssignment from './ListAssignment';
// import webb from './webb';
import  AlertAssign from './AlertAssign'


// AppRegistry.registerComponent(appName, () =>listAssignment);
 AppRegistry.registerComponent(appName, () =>MyContainer);
// AppRegistry.registerComponent(appName, () =>AlertAssign);