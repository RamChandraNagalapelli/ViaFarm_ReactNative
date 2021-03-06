import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Image, Button, Text, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { LoginStyles } from '../../Styles/LoginStyles'
import RegTextField from '../../Components/RegTextField'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import VFDropDown from '../../Components/VFDropDown'
import { connect } from 'react-redux';
import * as actions from '../../Actions'
import * as registrationServices from '../../Services/registrationService';

class RegistrationScreen extends Component {

    state = {
        name: '',
        surname: '',
        address: '',
        selectedLanguage: null,
        selectedCity: null,
        selectedState: null,
        filteredCities: [],
    }

    componentWillMount() {
        console.log("mobileNo", this.props.mobileNo);
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
                this.setState({ address: text })
                break
            case 3:
                this.setState({ selectedLanguage: this.languages[index] })
                break
            case 4:
                const selectedState = this.props.states[index]
                this.setState({ selectedState: selectedState, selectedCity: null })
                const { cities } = this.props
                if (selectedState && cities) {
                    const arrCities = cities.filter((item) => { return item.state._id === selectedState._id })
                    this.setState({ filteredCities: arrCities })
                }
                break
            case 5:
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
            // console.log("mobileNo", this.props.mobileNo);
            const data = {
                firstName: this.state.name,
                lastName: this.state.surname,
                address: this.state.address,
                city: this.state.selectedCity._id,
                state: this.state.selectedState._id,
                mobileNo: this.props.mobileNo 
            };
            
            // console.log("data in register", data);
            const { saveUser } = this.props;
            registrationServices.registrationService.registration(data).then(function(response) {
                if(response && response.success) {
                    const headers = response.headers.entries();
                    console.log("headers", headers);
                    saveUser(response.data);
                    Actions.DashboardScreen();        
                } else {
                    Alert.alert("alert", "somethingWentWrong");
                }    
            }).catch(function(error) {
                Alert.alert("alert", "somethingWentWrong");
                console.log("error in registration calling api", error);
            });
            
        }
    }

    languages = [{ name: 'English', id: 'en' }, { name: 'हिंदी', id: 'en' }, { name: 'తెలుగు', id: 'tl' }]

    render() {
        const { name, pincode, address, selectedState, selectedCity, filteredCities, selectedLanguage } = this.state
        const { states } = this.props
        // console.log("states in reg", states);
        const defaultState = selectedState ? selectedState.name : 'Select State'
        const defaultCity = selectedCity ? selectedCity.name : 'Select City'
        const defaultLanguage = selectedLanguage ? selectedLanguage.name : 'Select Language'

        return (
            <ScrollView onPress={Keyboard.dismiss} style={{ backgroundColor: 'white' }}>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center' }} >
                    <View style={{ width: '80%', paddingTop: 50 }}>
                        <RegTextField placeholder='Name' text={name} tag={0} onTextChanges={this.onTextChanges} />
                        <RegTextField placeholder='Surname' text={pincode} tag={1} onTextChanges={this.onTextChanges} />
                        <RegTextField placeholder='Address' text={address} tag={2} onTextChanges={this.onTextChanges} maxLength={100} multiline={true} />
                        <VFDropDown title='Language' defaultText={defaultLanguage} tag={3} options={this.languages} onSelect={this.onTextChanges} />
                        <VFDropDown title='State' defaultText={defaultState} tag={4} options={states} onSelect={this.onTextChanges} />
                        <VFDropDown title='City' defaultText={defaultCity} tag={5} options={filteredCities} onSelect={this.onTextChanges} />
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
    var states = [];
    if (stateList != null) {
        states = stateList
    }
    return {
        userDetails: userDetails,
        states: states,
        cities: cityList,
    }
}

export default connect(mapStateToProps, actions)(RegistrationScreen);