/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import AppSecond from './AppSecond';
//import Otp  from './Otp';
//import StylingAssignment  from './StylingAssignment';
//import ChangeColor  from './ChangeColor';
//import Navigation from './Navigation';
import {name as appName} from './app.json';
// import  TabNavigator from './TabNavigator';
import  MyntraTab   from './MyntraTab'
// import MyntraPage from './MyntraPage';
import sliderAssignment from './sliderAssignment';
import listAssignment from './listAssignment';
// import webb from './webb';


// AppRegistry.registerComponent(appName, () =>listAssignment);
AppRegistry.registerComponent(appName, () =>sliderAssignment);