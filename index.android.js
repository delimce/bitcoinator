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

import Router from 'react-native-simple-router';

const Init = require('./components/InitialView');


const firstRoute = {
    name: 'Welcome!',
    component: Init,
};

export default class appbitcoin extends Component {
  render() {
    return (

        <Router
            firstRoute={firstRoute}
        />

    );
  }
}


AppRegistry.registerComponent('appbitcoin', () => appbitcoin);
