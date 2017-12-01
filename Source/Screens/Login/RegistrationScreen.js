import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Image, Button, Text, TouchableOpacity, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import TextField from '../../Components/TextField'
import { LoginStyles } from '../../Styles/LoginStyles'

import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default class RegistrationScreen extends Component {

    render() {
        return(
            <View style = {{ flex: 1, width: '100%', height: '100%', backgroundColor: 'white' }} >
            <Text>{this.props.otp}</Text>
            </View>
        )
    }
}