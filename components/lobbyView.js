'use strict'
import React,{Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';


class lobbyView extends Component{

    render(){

        return (

    <View style={styles.container}>
            
           <View>
              <Image source={require('../img/logo.png')}
            style={{resizeMode:'contain', opacity: 0.8}} />
            <Text style={styles.welcome}>Bitcoin calculator and assistant</Text>
          </View>

        </View>
     

        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
  }
});

module.exports = lobbyView;