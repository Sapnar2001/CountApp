import React, { Component } from "react";
import { View,SafeAreaView,Text,Button, StyleSheet} from "react-native";

class App extends React.Component {
  constructor(){
    super();
    this.state={
counter:  0
    }
  }
  increment=()=>{

    this.setState({counter:this.state.counter  +1})
  }
  decrement=()=>{
    if (this.state.counter>0){
      this.setState({counter:this.state.counter  -1})

    }
  }
  render() {
    return (
      <SafeAreaView>
      <View>
      <Text style={styles.textstyle}>{this.state.counter}</Text>

      <Button onPress={this.increment} title="+"/>
      <Button style={styles.commonbutton} onPress={this.decrement} title="-"/>
      </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  textstyle:{
    fontSize:60, 
     marginBottom:-20, 
     textAlign:'center',
     width:"100%",
     marginTop:"40",
     marginBottom:"40",
  },
  // button: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: 12,
  //   paddingHorizontal: 32,
  //   borderRadius: 4,
  //   elevation: 3,
  //   backgroundColor: 'black',
  //   fontSize: 16,
  //   lineHeight: 21,
  //   fontWeight: 'bold',
  //   letterSpacing: 0.25,
  //   color: 'white',
  // },
  

});
export default App;