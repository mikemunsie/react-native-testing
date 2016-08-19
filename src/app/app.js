import _ from "lodash";
import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, BackAndroid } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { Manage as PagesManage } from "./pages/manage";
import { Index as PagesIndex } from "./pages/index";

const store = configureStore();

let globalNavigator;

BackAndroid.addEventListener('hardwareBackPress', function() {
  if (globalNavigator) {
    globalNavigator.pop();
    return true;
  }
  return false;
});

export class App extends Component {
  constructor(props) {
    super(props)
    this.routes = [
      {
        page: "index",
        view: (navigator) => <PagesIndex router={this.router(navigator)} />,
        transition: Navigator.SceneConfigs.FadeAndroid
      },
      {
        page: "manage",
        view: (navigator) => <PagesManage router={this.router(navigator)} />,
        transition: Navigator.SceneConfigs.FadeAndroid
      }
    ];
  }
  router(navigator) {
    globalNavigator = navigator;
    return {
      changeRoute: (page) => navigator.push(_.find(this.routes, { page })),
      previousRoute: () => navigator.pop()
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={this.routes[0]}
          initialRouteStack={this.routes}
          configureScene={(route, routeStack) => route.transition}
          renderScene={(route, navigator) => route.view(navigator) }
        />

      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTest', () => App);