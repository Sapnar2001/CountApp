import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
import AppSecond from './AppSecond';
import Home from './Home';
import ChangeColor from './ChangeColor';
import SliderAssignment from './SliderAssignment';
import Otp from './Otp';
import Webb from './Webb'
import MyntraPage from './MyntraPage';
import ListAssignment from './ListAssignment';
import AlertAssign from './AlertAssign';
import ClipAssign from  './ClipAssign';
const Stack = createStackNavigator();
export default function MyContainer() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Assignment8" component={AlertAssign} />
          <Stack.Screen name="Assignment9" component={ClipAssign} />
          <Stack.Screen name="Assignment7" component={ListAssignment} />
          <Stack.Screen name="Assignment5" component={Webb} />
          <Stack.Screen name="Assignment4" component={SliderAssignment} />
          <Stack.Screen name="Assignment6" component={MyntraPage} />
          <Stack.Screen name="Assignment1" component={ChangeColor} />
          <Stack.Screen name="Assignment2" component={AppSecond} />
          <Stack.Screen name="Assignment3" component={Otp} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
