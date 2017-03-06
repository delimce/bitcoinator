/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import { Button, Card } from 'react-native-material-design';

const Lobby = require('./components/lobbyView');

export default class appbitcoin extends Component {
  render() {
    return (
     
    <Lobby></Lobby>


    );
  }
}



AppRegistry.registerComponent('appbitcoin', () => appbitcoin);
