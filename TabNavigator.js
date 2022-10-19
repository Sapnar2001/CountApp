import * as React from 'react';
import ChangeColor from './ChangeColor';
import AppSecond from './AppSecond';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import { createDrawerNavigator } from "@react-navigation/drawer";
// const Tab = createBottomTabNavigator();
 const Drawer = createDrawerNavigator();


//  class DrawerNav extends Component {
//      render() {
//          return (

//               <Drawer.Navigator>
//                   <Drawer.Screen name="Assignment1" component={ChangeColor} />
//                   <Drawer.Screen name="Assignment1" component={AppSecond} />
//               </Drawer.Navigator>
//          );
//      }
    
//     }


export default class TabNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                {/* <Tab.Navigator>
                    <Tab.Screen name="Home" component={DrawerNav} />
                    <Tab.Screen name="Assignment1" component={ChangeColor} />
                    <Tab.Screen name="Assignment2" component={AppSecond} />
                </Tab.Navigator> */}
                  <Drawer.Navigator>
                  <Drawer.Screen name="Assignment1" component={ChangeColor} />
                  <Drawer.Screen name="Assignment2" component={AppSecond} />
              </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}