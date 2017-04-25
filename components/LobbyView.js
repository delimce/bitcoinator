'use strict'
import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    Image
} from 'react-native';

import {Button, Card} from 'react-native-material-design';


class LobbyView extends Component {


    render() {


        return (

            <View style={{flex: 1}}>
                <View style={[styles.half, styles.headerColor]}>
                    <Image source={require('../img/logo.png')}
                           style={styles.logoImage}/>
                    <Text style={styles.welcome}>Bitcoin calculator and assistant</Text>
                </View>
                <View style={[styles.half, styles.footerColor]}>

                </View>
            </View>


        )
    }
}


let width1 = Dimensions.get('window').width; //full width
let height1 = Dimensions.get('window').height; //full height
height1 = Math.floor(height1 / 2);

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
    },
    logoImage: {
        resizeMode: 'contain',
        opacity: 0.8,
        width: 300,

    },
    half: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width1,
        height: height1,

    },
    headerColor: {
        backgroundColor: 'lightgrey'
    },
    footerColor: {
        backgroundColor: 'darkslategray'
    }

});

module.exports = LobbyView;