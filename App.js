import React, { Component } from "react";
import { View, SafeAreaView, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
  increment = () => {

    this.setState({ counter: this.state.counter + 1 })
  }
  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 })

    }
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.main}>
          <Text style={{ fontSize: 40 }}>Counter</Text>
          <View style={styles.counter}>
            <TouchableOpacity style={styles.button} onPress={this.increment}>
              <Text style={styles.Textstyle}>+</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 70 }}>{this.state.counter}</Text>
            <TouchableOpacity style={styles.button} onPress={this.decrement}>
              <Text style={styles.Textstyle}>-</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.Reset}>
            <Text style={styles.Textstyle}>Reset</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    margin: 40,
    borderRadius: 10
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textstyle: {
    color: 'white'
  }
});

export default App;