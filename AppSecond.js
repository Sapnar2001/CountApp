import React from "react";
import { View, SafeAreaView, Text,StyleSheet, TouchableOpacity ,TextInput,Image} from "react-native";
class App extends React.Component {
    render()
    {
    return(
        <View style={styles.mainContainer}>
             <Image source = {{uri:''}}
             style={styles.imgStyle}/>
        <Text style={styles.mainHeader}>Instagram</Text>
        <View  style={styles.inputContainer}>
            <TextInput style={styles.inputStyle} placeholder="Enter  email  address"/>
        </View>
        <View  style={styles.inputContainer}>
            <TextInput style={styles.inputStyle} placeholder="Enter  password" secureTextEntry={true}/>
        </View>
        <TouchableOpacity  style={styles.submitButton}>
            <Text style={styles.buttonStyle}>Login</Text>
        </TouchableOpacity>
        </View>

    );
    }
}
const styles = StyleSheet.create({
    imgStyle:{
     width: 50,
      height: 50 ,
      top:20,
      justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        alignSelf: 'center',
    
    },
    mainHeader:{
        fontSize: 25,
       // fontWeight: 500,
       //fontFamily:"Neue Helvetica",
       color:"black",
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center",
        margin:20,
    },
    mainContainer:{
        paddingTop:30,
        flex:1,
        height:500,
        marginTop:50,
        backgroundColor:"grey",
    },
    inputContainer:{
marginTop:10,
    },
    inputStyle:{
        marginTop:10,
        padding:10,
marginBottom:5,
borderWidth:1.5,
width:"70%",
fontSize:20,
borderRadius:10,
marginHorizontal:50,
    },
    submitButton:{
        marginBottom:5,
        height:40,
        marginTop:10,
        width:"70%",
        fontSize:20,
        borderRadius:5,
        marginHorizontal:50,
        backgroundColor:"#4630EB" ,
    },
    buttonStyle:{
        textAlign:"center",
        paddingTop:10,
    },
});
export  default App;