import React, { Component } from "react";
import { View, SafeAreaView, Text, Button, StyleSheet, TouchableOpacity } from "react-native";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor called');
  }

  increment = () => {
    if (this.state.count < 10) {
      this.setState({count: this.state.count + 1});
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1});
    }
  };

  static getDerivedStateFromProps() {
    console.log('Parent getDerivedStateFromProps called');
    return null;
  }

  componentDidMount() {
    console.log('Parent componentDidMount called');
  }

  componentDidUpdate() {
    console.log('Parent componentDidUpdate called');
  }

  shouldComponentUpdate() {
    console.log('Parent shouldComponentUpdate called');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('Parent getSnapshotBeforeUpdate called');
    return null;
  }

  componentWillUnmount() {
    console.log('Parent componentWillUnmount');
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.Main}>
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
  Main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textstyle: {
    color: 'white'
  }
});

export default App;