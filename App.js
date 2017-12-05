/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Scene, Router } from 'react-native-router-flux'
import React, { Component } from 'react';
import Screens from './Source/Resources/NavigationManager';

export default class App extends Component<{}> {
  render() {
    return (
      <Screens />
    );
  }
}
