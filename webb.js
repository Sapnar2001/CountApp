import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator} from 'react-native';
import WebView  from 'react-native-webview';


export default class Webb extends Component {
  ActivityIndicatorElement() {
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={styles.activityIndicatorStyle}
      />
    );
  };
  render() {
    return <WebView source={{ uri: 'https://www.zomato.com' }}
    renderLoading={this.ActivityIndicatorElement}
    startInLoadingState={true}
    />
  }
}
const styles = StyleSheet.create ({
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
})