import * as React from 'react';
import { StyleSheet,Image, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyntraPage from './MyntraPage';
import AppSecond from './AppSecond';
import ChangeColor  from './ChangeColor';
import Otp from './Otp';

const Tab = createBottomTabNavigator();
class Page extends React.Component{
    render(){
        alert("you clicked wishlist");
    }
}
class Page2 extends React.Component{
    render(){
        alert("you clicked cart");
    }
}
class Page3 extends React.Component{
    render(){
        alert("you clicked Account");
    }
}
class Page4 extends React.Component{
    render(){
        alert("you clicked categories");
    }
}
export default class TabNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                  <Tab.Navigator>
                     <Tab.Screen name="MEN CLOTHING" component={MyntraPage} 
                     options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./Images/home.png')} style={styles.menImg} />
                        ),
                      }}
                    
                     />
                      <Tab.Screen name="categories" component={Page4} 
                     options={{
                        tabBarLabel: 'categories',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./Images/categories.png')} style={styles.menImg} />
                        ),
                      }}
                      
                     />
                     <Tab.Screen name="wishlist" component={Page} 
                     options={{
                        tabBarLabel: 'wishlist',
                        tabBarIcon: ({ color, size,focused }) => (

                            <Image source={require('./Images/heart.png')} style={styles.menImg} />
                        ),
                      }}
                     />
                     <Tab.Screen name="cart" component={Page2} 
                     options={{
                        tabBarLabel: 'cart',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./Images/cart.png')} style={styles.menImg} />
                        ),
                      }}
                     />
                     <Tab.Screen name="Account" component={Page3} 
                     options={{
                        tabBarLabel: 'account',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./Images/account.png')} style={styles.menImg} />
                        ),
                      }}
                      
                     />
                     
                 </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
const styles = StyleSheet.create({
    menImg:{
        height:20,
        width:20,
    }
})