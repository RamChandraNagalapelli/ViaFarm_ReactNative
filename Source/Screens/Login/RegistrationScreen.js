import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Image, Button, Text, TouchableOpacity, Alert, Dimensions } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux'
import { LoginStyles } from '../../Styles/LoginStyles'
import RegTextField from '../../Components/RegTextField'
import ModalDropdown from 'react-native-modal-dropdown'
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default class RegistrationScreen extends Component {

    state = {
        name: '',
        pincode: '',
        country: '',
        state: '',
        city: '',
    }

    onTextChanges = ({ text, tag }) => {
        switch (tag) {
            case 0:
                this.setState({ name: text })
            case 1:
                this.setState({ pincode: text })
            case 2:
                this.setState({ country: text })
            case 3:
                this.setState({ state: text })
            case 4:
                this.setState({ city: text })
            default: break
        }
    }

    renderRow = (item) => {
        return (
            <Text style={{ width: screenSize.width * 0.8, padding: 10 }}>{item}</Text>
        )
    }

    render() {
        const { name } = this.state
        const { pincode } = this.state
        const { country } = this.state
        const { state } = this.state
        const { city } = this.state

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center' }} >
                    <View style={{ width: '80%', paddingTop: 50 }}>
                        <RegTextField placeholder='Name' text={name} tag={0} onTextChanges={this.onTextChanges} />
                        <RegTextField placeholder='Pincode' text={pincode} tag={1} onTextChanges={this.onTextChanges} maxLength={6} keyboardType='number-pad' />
                        <RegTextField placeholder='Country' text={country} tag={2} onTextChanges={this.onTextChanges} />
                        <RegTextField placeholder='State' text={state} tag={3} onTextChanges={this.onTextChanges} />
                        <RegTextField placeholder='City' text={city} tag={4} onTextChanges={this.onTextChanges} />
                        <ModalDropdown
                            style={styles.dropDown}
                            options={['AP', 'TE', 'TN', 'GJ', 'UP', 'MP', 'GOA']}
                            renderRow={this.renderRow}
                            defaultValue='Select city'
                            textStyle={styles.dropDownText}
                        />
                        <View style={[LoginStyles.loginButton, { width: '100%' }]}>
                            <TouchableOpacity onPress={this.onLogin} >
                                <Text style={[LoginStyles.label, { color: 'white' }]}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    dropDown: {
        marginTop: 20,
        width: '100%',
        height: 30,
    },
    dropDownText: {
        fontSize: 18,
    }
})

const screenSize = Dimensions.get("window")