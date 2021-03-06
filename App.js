/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Scene, Router } from 'react-native-router-flux'
import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import Screens from './Source/Resources/NavigationManager';
import reducers from './Source/Reducers'

// Add the autoRehydrate middleware to your redux store
const store = createStore(reducers)

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Screens />
      </Provider>
    );
  }
}
