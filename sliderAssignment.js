
import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
export default class sliderAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValue: 50,
            switchValue: false,
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style= {styles.text}>SWITCH</Text>
                <View style= {styles.switch}>
                    <Switch
                        thumbColor={this.state.switchValue ? "white" : "#f4f3f4"}
                        value={this.state.switchValue}
                        ios_backgroundColor='red'
                        onValueChange={(switchValue) => this.setState({ switchValue })}
                    />
                </View>


                {this.state.switchValue ?
                    <Slider
                        maximumValue={100} minimumValue={0} step={1}
                        value={this.state.sliderValue}
                        onValueChange={sliderValue => this.setState({ sliderValue })}
                    /> : ''}

                {this.state.switchValue && <Text style={{ textAlign: 'center', color: '#000000' }}>
                    {this.state.sliderValue}
                </Text>}
                
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20, justifyContent: 'center', backgroundColor: '',
    },
    button: {
        justifyContent: 'center',

    },
    switch:{
        alignItems: 'center',
        marginTop: 40
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 30,
        marginTop: 30
    }
});