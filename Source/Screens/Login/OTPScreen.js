import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextField } from '../../Components'
import { LoginStyles } from '../../Styles/LoginStyles'
import { Actions } from 'react-native-router-flux';

export default class OTPScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileNo: '',
            otp: ''
        }
    }

    componentWillMount() {
        const { mobileNo } = this.props
        this.setState({ mobileNo })
    }

    onResendOTP = () => {
        Alert.alert('alert', 'Please use \'123456\' as OTP')
    }

    onOTPChange = (text) => {
        this.setState({ otp: text })
    }

    onSubmitOTP = () => {
        Keyboard.dismiss()
        if (this.isValidData() === true) {
            Actions.RegistrationScreen({ otp: this.state.otp })
        }
    }

    isValidData = () => {
        if (!this.state.otp) {
            Alert.alert('Note', 'Please enter OTP')
            return false
        }
        const { otp } = this.state
        if (otp.length != 6) {
            Alert.alert('Note', 'OTP must be 6 digits')
            return false
        }
        if (otp != '123456') {
            Alert.alert('Note', 'Please use \'123456\' as OTP')
            return falsed
        }
        return true
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style = {{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                    <View style = {LoginStyles.container}>
                        <Image
                            source = {require('../../Images/logo.png')}
                            style = {{ height: '25%', aspectRatio: 1, marginBottom: 50 }}
                            resizeMode = 'contain'
                        />
                        <TextField
                            // text = {this.state.mobileNo}
                            placeholder = {'Enter OTP'}
                            onTextChange = {this.onOTPChange}
                            keyboardType = 'number-pad'
                            maxLength = {6}
                            textAlign = 'center'
                        />
                        <View style = {LoginStyles.loginButton}>
                            <TouchableOpacity onPress = {this.onSubmitOTP} >
                                <Text style = {[LoginStyles.label, { color: 'white' }]}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style = {LoginStyles.resendOTP} onPress = {this.onResendOTP}>resend OTP?</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
