import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Image, Button, Text, TouchableOpacity, Alert, Dimensions } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux'
import { LoginStyles } from '../../Styles/LoginStyles'
import RegTextField from '../../Components/RegTextField'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import VFDropDown from '../../Components/VFDropDown'
import { connect } from 'react-redux';
import * as actions from '../../Actions'
import { cityList } from '../../Reducers/LocationReducers';

class RegistrationScreen extends Component {

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
                this.setState({ country: text, state: '', city: '', states: this.states, cities: [] })
            case 3:
                this.setState({ state: text, city: '', cities: this.cities })
            case 4:
                this.setState({ city: text })
            default: break
        }
    }

    onSelectDropDown = ({ text, tag }) => {
        switch (this.props.title) {
            case 'Country':
                this.props.setCountry(this.props.options[index])
                this.props.setState(null)
                this.props.setCity(null)
                break
            case 'State':
                this.props.setState(this.props.options[index])
                this.props.setCity(null)
                break
            case 'City':
                this.props.setCity(this.props.options[index])
                break
            default: break;
        }
    }

    onRegister = () => {
        Actions.DashboardScreen();
    }

    cities = ['ahmedabad', 'vizag', 'Hyderabad', 'Vijayawada', 'Srikhakulam', 'Surath']
    states = ['AndharaPradesh', 'TamilnNadu', 'Telangane', 'Gujarat', 'Orissa', 'MadyaPradesh', 'UttarPradesh']
    countries = ['India', 'SriLanka', 'Pakisthan', 'Butan', 'America', 'England', 'Australia', 'Newziland']

    render() {
        const { name, pincode, country, state, city } = this.state

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center' }} >
                    <View style={{ width: '80%', paddingTop: 50 }}>
                        <RegTextField placeholder='Name' text={name} tag={0} onTextChanges={this.onTextChanges} />
                        <RegTextField placeholder='Pincode' text={pincode} tag={1} onTextChanges={this.onTextChanges} maxLength={6} keyboardType='number-pad' />
                        <VFDropDown title = 'Country' defaultText = 'Select Country' tag = {2} options={this.countries} onSelect = {this.onTextChanges}/>
                        <VFDropDown title = 'State' defaultText = 'Select State' tag = {3} options={this.states} onSelect = {this.onTextChanges}/>
                        <VFDropDown title = 'City' defaultText = 'Select City' tag = {4} options={this.cities} onSelect = {this.onTextChanges}/>
                        <View style={[LoginStyles.loginButton, { width: '100%' }]}>
                            <TouchableOpacity onPress={this.onRegister} >
                                <Text style={[LoginStyles.label, { color: 'white' }]}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const screenSize = Dimensions.get("window")

const mapStateToProps = (state, ownProps) => {
    return {
        countries: state.countryList,
        states: state.stateList,
        cities: state.cityList,
        currentCountry: state.selectedCountry,
        currentState: state.selectedState,
        currentCity: state.selectedCity,
    }
}

export default connect(mapStateToProps, actions)(RegistrationScreen);