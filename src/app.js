import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  DeviceEventEmitter
} from 'react-native';
import PushNotification from 'react-native-push-notification';

var BackgroundTimer = require('react-native-background-timer');

import { styles } from "./stylesheet";
import { ViewsDashboard } from "./views/dashboard.js";
import { ViewsWebView } from "./views/webView.js";

class ReactNativeTest extends Component {

  constructor(props) {
    super(props);

    PushNotification.configure({
      requestPermissions: true
    });

    // Interval that will run in the background and run some tasks :D
    BackgroundTimer.start(30000);
    DeviceEventEmitter.addListener('backgroundTimer', () => {
      this.testJSON().then(this.sendNotification);
    });
  }

  async testJSON() {
    try {
      let response = await fetch('http://munstrocity.com:9001/');
      let responseJson = await response.json();
      return responseJson.lastChecked;
    } catch(error) {
      console.error(error);
    }
  }

  sendNotification(message) {
    PushNotification.localNotification({
      title: "My Notification Title", // (optional)
      ticker: "My Notification Ticker", // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
      smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
      color: "red", // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      message: message, // (required)
      playSound: true, // (optional) default: true
    });

  }
  componentWillUnmount() {
    BackgroundTimer.stop();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {/*
          <ViewsWebView />
          <ViewsDashboard />
          */
        }
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);
