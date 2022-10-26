import React, { Component } from "react";
import { View, SafeAreaView, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import ChildCop from "./ChildCop";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor called');
  }

  // increment = (props) => {
  //   if (this.state.count < 10) {
  //     this.setState({count: this.state.count + 1});
  //   }
  // };

  // decrement = (props) => {
  //   if (this.state.count > 0) {
  //     this.setState({count: this.state.count - 1});
  //   }
  // };

  // static getDerivedStateFromProps() {
  //   console.log('Parent getDerivedStateFromProps called');
  //   return null;
  // }

  // componentDidMount() {
  //   console.log('Parent componentDidMount called');
  // }

  // componentDidUpdate() {
  //   console.log('Parent componentDidUpdate called');
  // }

  // shouldComponentUpdate() {
  //   console.log('Parent shouldComponentUpdate called');
  //   return true;
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log('Parent getSnapshotBeforeUpdate called');
  //   return null;
  // }

  // componentWillUnmount() {
  //   console.log('Parent componentWillUnmount');
  // }
  render() {
    return (
      <SafeAreaView>
        <ChildCop childCount={this.state.count} childInc={this.increment} childDec={this.decrement}/>
      </SafeAreaView>
    );
  }
}


export default App;