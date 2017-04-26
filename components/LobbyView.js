'use strict'
import React, { PropTypes } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    Image
} from 'react-native';

const propTypes = {
    toRoute: PropTypes.func.isRequired,
};



class LobbyView extends React.Component {


    render() {

        return (

            <View style={{flex: 1}}>
               <Text text="hello" style={{backgroundColor:'black'}}/>
            </View>

        )
    }
}



LobbyView.propTypes = propTypes;

export default LobbyView;