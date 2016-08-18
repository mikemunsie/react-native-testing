import React, { Component } from 'react';
import { AppRegistry } from "react-native";
import { Provider } from 'react-redux';
import { Index } from "./pages/index";
import { About } from "./pages/about";
import { configureStore } from './store';

const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}


AppRegistry.registerComponent('ReactNativeTest', () => App);