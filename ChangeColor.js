import React, { Component } from "react";
import { View,Text,SafeAreaView,StyleSheet,TextInput ,TouchableOpacity } from "react-native";
export default class ChangeColor extends Component {
      constructor(props) {
       super(props);
      this.state = {
           value:'',
           color:'',
       };
    }
    // increment = () => {
    //     if (this.state.count < 10) {
    //       this.setState({count: this.state.count + 1});
    //     }
    //   };
          buttonclick=()=>{
            var n=this.state.value;
            let uppercasetext = n.toLowerCase()
           this.setState({color:uppercasetext})

          }
        
    
render() {
    return (
        <SafeAreaView style={styles.mainContainer}>
        <View style={{backgroundColor: this.state.color , marginTop:20,  width:"100%",height:100}}>
            {/* <Text> color is {this.state.color}</Text> */}
        </View>
        <View>
            <TextInput type="text" value={this.setState.value} placeholder="enter color" 
           style={styles.textInput}
             onChangeText={
                value=>this.setState({value})
             }
                            />
        </View>
        <TouchableOpacity style={styles.button}  onPress={this.buttonclick}>
                    <Text style={styles.buttonText}>click me</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
}
}
const styles = StyleSheet.create({
    mainContainer:{
ajustifyContent: 'center',
alignItems: 'center',
    },
   
    textInput:{
        borderRadius: 5,
        width: 300,
        padding:30,
        borderWidth: 1,
        margin:40,
    },
    button: { // box:{
       borderColor:"red",
       borderWidth: 1,
       borderRadius:15,
        height:200,
        width:200,
        margin:30,

    },
    button:{
        textAlign:'center',
        backgroundColor: 'rgb(90,128,236)',
        width: "50%",
        marginTop: 50,
        marginLeft: 20,
        //    marginHorizontal:10,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        padding: 15,
    }
});