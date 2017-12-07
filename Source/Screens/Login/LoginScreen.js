import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Image, Button, Text, TouchableOpacity, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import TextField from '../../Components/TextField'
import { LoginStyles } from '../../Styles/LoginStyles'

import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as userServices from '../../Services/userServices';
import * as actions from '../../Actions/usersActions'
// const userAction = require("../../Actions/userActions");
import { connect } from 'react-redux';

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileNo: ''
        }
    }

    onMobileNumberChange = (text) => {
        this.setState({ mobileNo: text })
    }

    componentWillMount() {
        console.log('App componentWillMount', userServices);
    }

    onLogin = () => {
        Keyboard.dismiss()
        if (this.isValidData() === true) {
            var data = {
                mobileNo: this.state.mobileNo
            }
            const { saveUser } = this.props;
            userServices.userService.login(data).then(function(response) {
                if(response && response.success) {
                    saveUser(response);
                    Actions.OTPScreen(data);
                } else {
                    Alert.alert('Alert', 'Something went wrong!!!!! \n please try again');
                }
            }).catch(function(error) {
                Alert.alert('Error', 'Something went wrong!!!!!');
            });
        }
    }
    onCompletion = (data) => {
        console.log('UserDetails from LoginScreen', data)
        Actions.OTPScreen({ mobileNo: this.state.mobileNo })
    }
    isValidData = () => {
        if (!this.state.mobileNo) {
            Alert.alert('Note', 'Please enter mobile number')
            return false
        }
        const { mobileNo } = this.state
        if (mobileNo.length < 10) {
            Alert.alert('Note', 'Please enter valid mobile number')
            return false
        }
        return true
    }

    render() {
        // console.log("userDetails", this.props.userDetails);
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                    <View style={LoginStyles.container}>
                        <Image
                            source={require('../../Images/logo.png')}
                            style={{ height: '25%', aspectRatio: 1, marginBottom: 50 }}
                            resizeMode='contain'
                        />
                        <TextField
                            text={this.state.mobileNo}
                            placeholder={'Mobile number'}
                            onTextChange={this.onMobileNumberChange}
                            maxLength = {13}
                            keyboardType = 'number-pad'
                        />
                        <View style={LoginStyles.loginButton}>
                            <TouchableOpacity onPress={this.onLogin} >
                                <Text style={[LoginStyles.label, {color: 'white'}]}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails
    }
}

export default connect(mapStateToProps, actions)(LoginScreen);