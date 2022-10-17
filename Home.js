import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet,Button } from 'react-native'
import React from 'react'

export default class Home extends React.Component {
    render() {
        return (
                <View style={styles.main} >
      <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate('Assignment1')}  >
                    <Text style={styles.buttonText}>Assignment1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate('Assignment2')}  >
                    <Text style={styles.buttonText}>Assignment2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => this.props.navigation.navigate('Assignment3')}  >
                    <Text style={styles.buttonText}>Assignment3</Text>
                </TouchableOpacity>
      </View>
        )
    }
}
const styles = StyleSheet.create({

    main: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "column",
        textAlign:'center',
    },
    button: {
        textAlign: 'center',
        backgroundColor: 'rgb(90,128,236)',
        width: "65%",
        height:60,
        margin:50,
        justifyContent:'center'
        //    marginHorizontal:10,
    },
    buttonText:{
        textAlign: 'center',
    },
});
