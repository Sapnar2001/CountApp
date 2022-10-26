import React, { useEffect } from "react";
import { Text, View, StyleSheet, BackHandler, Alert } from "react-native";

const BackFunctional = (props) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Do you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => props.navigation.goBack() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click Back button!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default BackFunctional;









// import React from "react";
// import { View, SafeAreaView, Alert, Text, StyleSheet, TouchableOpacity, Button, TextInput, Image } from "react-native";

// export default class AlertAssign extends React.Component {

//     constructor(props) {
//         super(props)
//     }
//     showAlert1=()=>{
       
//         Alert.alert(
//             'Alert Title',
//             'My Alert Msg',
//             [
//                 {
//                     text: 'Cancel',
//                     onPress: () => console.log('Cancel Pressed'),
//                     style: 'cancel',
//                 },
//                 {
//                     text: 'BACK',
//                     onPress: () => {
//                         this.props?.navigation?.goBack()
//                     },
//                 },
//             ]
//         );
//     }
    
//     render() {
//         return (
//             <SafeAreaView>
// {/* <Text>press back button</Text> */}
// <TouchableOpacity style={styles.button} onPress={this.showAlert1}>
//                     <Text style={styles.buttonText}>back</Text>
//                 </TouchableOpacity> 
//             </SafeAreaView>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     button: {
//         textAlign: 'center',
//         backgroundColor: 'rgb(90,128,236)',
//         width: "65%",
//         height: 60,
//         margin: 10,
//         justifyContent: 'center'
//         //    marginHorizontal:10,
//     },
//     buttonText: {
//         textAlign: 'center',
//         color: 'white',
//     },
// });