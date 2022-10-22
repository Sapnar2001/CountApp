import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppSecond from './AppSecond';
import Home from './Home';
import ChangeColor  from './ChangeColor';
import sliderAssignment from './sliderAssignment';
import Otp from './Otp';
import webb from './webb'
import MyntraPage from './MyntraPage';
import listAssignment  from './listAssignment';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default class Navigation extends React.Component {
// constructor(props){
//   super(props)
//   const Stack = createNativeStackNavigator();

// }
 
  render(){
    
 return (
    <NavigationContainer>
<Stack.Navigator>
       
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Assignment7" component={listAssignment} />
        <Stack.Screen name="Assignment5" component={webb} />
        <Stack.Screen name="Assignment4" component={sliderAssignment} /> 
        <Stack.Screen name="Assignment6" component={MyntraPage} /> 
        <Stack.Screen name="Assignment1" component={ChangeColor} />
        <Stack.Screen name="Assignment2" component={AppSecond} /> 
        <Stack.Screen name="Assignment3" component={Otp} /> 
       
        
       
        </Stack.Navigator>
    </NavigationContainer>
  )
 }
}
