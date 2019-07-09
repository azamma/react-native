// /**
 // * @format
 // */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Boxit', () => HelloWorldApp);
