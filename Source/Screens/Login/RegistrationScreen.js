import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Image, Button, Text, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { LoginStyles } from '../../Styles/LoginStyles'
import RegTextField from '../../Components/RegTextField'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import VFDropDown from '../../Components/VFDropDown'
import { connect } from 'react-redux';
import * as actions from '../../Actions'

class RegistrationScreen extends Component {

    state = {
        name: '',
        surname: '',
        selectedLanguage: null,
        selectedCity: null,
        selectedState: null,
        filteredCities: [],
    }

    componentWillMount() {
        console.log("userDetails", this.props.userDetails);
    }

    onTextChanges = ({ text, tag, index }) => {
        switch (tag) {
            case 0:
                this.setState({ name: text })
                break
            case 1:
                this.setState({ surname: text })
                break
            case 2:
                this.setState({ selectedLanguage: this.languages[index] })
                break
            case 3:
                const selectedState = this.props.states[index]
                this.setState({ selectedState: selectedState, selectedCity: null })
                const { cities } = this.props
                if (selectedState && cities) {
                    const arrCities = cities.filter((item) => { return item.stateId === selectedState.id })
                    this.setState({ filteredCities: arrCities })
                }
                break
            case 4:
                this.setState({ selectedCity: this.state.filteredCities[index] })
            default: break
        }
    }

    isValidData = () => {
        const { name, surname, selectedCity, selectedState } = this.state
        if (!name) {
            Alert.alert('Note', 'Please enter Name');
            return false
        }
        if (!surname) {
            Alert.alert('Note', 'Please enter Surname');
            return false
        }
        if (!selectedState) {
            Alert.alert('Note', 'Please select State');
            return false
        }
        if (!selectedCity) {
            Alert.alert('Note', 'Please select City');
            return false
        }
        return true
    }

    onRegister = () => {
        if (this.isValidData() === true) {
            if (this.state.selectedLanguage) {
                this.props.setLanguage(this.state.selectedLanguage.id)
            }
            Actions.DashboardScreen()
        }
    }

    languages = [{ name: 'English', id: 'en' }, { name: 'हिंदी', id: 'en' }, { name: 'తెలుగు', id: 'tl' }]

    render() {
        const { name, pincode, selectedState, selectedCity, filteredCities, selectedLanguage } = this.state
        const { states } = this.props
        const defaultState = selectedState ? selectedState.name : 'Select State'
        const defaultCity = selectedCity ? selectedCity.name : 'Select City'
        const defaultLanguage = selectedLanguage ? selectedLanguage.name : 'Select Language'

        return (
            <ScrollView onPress={Keyboard.dismiss} style={{ backgroundColor: 'white' }}>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center' }} >
                    <View style={{ width: '80%', paddingTop: 50 }}>
                        <RegTextField placeholder='Name' text={name} tag={0} onTextChanges={this.onTextChanges} />
                        <RegTextField placeholder='Surname' text={pincode} tag={1} onTextChanges={this.onTextChanges} />
                        <VFDropDown title='Language' defaultText={defaultLanguage} tag={2} options={this.languages} onSelect={this.onTextChanges} />
                        <VFDropDown title='State' defaultText={defaultState} tag={3} options={states} onSelect={this.onTextChanges} />
                        <VFDropDown title='City' defaultText={defaultCity} tag={4} options={filteredCities} onSelect={this.onTextChanges} />
                        <View style={[LoginStyles.loginButton, { width: '100%' }]}>
                            <TouchableOpacity onPress={this.onRegister} >
                                <Text style={[LoginStyles.label, { color: 'white' }]}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const screenSize = Dimensions.get("window")

const mapStateToProps = (state) => {
    const { stateList, cityList, userDetails } = state

    return {
        userDetails: userDetails,
        states: stateList,
        cities: cityList,
    }
}

export default connect(mapStateToProps, actions)(RegistrationScreen);