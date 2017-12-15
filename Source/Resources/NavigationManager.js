import { Scene, Router, Stack } from 'react-native-router-flux';
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { setLanguage } from '../Actions';


import LoginScreen from '../Screens/Login/LoginScreen';
import OTPScreen from '../Screens/Login/OTPScreen';
import RegistrationScreen from '../Screens/Login/RegistrationScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import ModernTechnologyScreen from '../Screens/ModernTechnologyScreen';
import OrganicFarmingScreen from '../Screens/OrganicFarmingScreen'
import WeatherScreen from '../Screens/WeatherScreen';
import AgricultureDashboardScreen from '../Screens/Agriculture/AgricultureDashboardScreen';
import TradingScreen from '../Screens/TradingScreen';
import AddTradingScreen from '../Screens/AddTradingScreen'
import procedureScreen from '../Screens/Agriculture/procedureScreen'
import * as locationServices from '../Services/locationService';

class Screens extends Component {

    state = {
        logged: true
    }

    componentWillMount() {
        console.log(locationServices);
        if (!this.props.language) {
            this.props.setLanguage('en');
        }
        this.setLanguage();

        const { setCity, setState } = this.props;
        var weakSelf = this;
        locationServices.locationService.getLocations().then(function (response) {
            console.log("response", response.data);
            weakSelf.setState({ showIndicator: false });
            if (response && response.success) {
                setState(response.data.state);
                setCity(response.data.city);
            } else {
                console.log("error in navigation manager line no.42", error);
            }
        }).catch(function (error) {
            console.log("error in navigation manager line no.45", error);
            Alert.alert(language.alert, language.somethingWentWrong, [{ text: (language ? language.ok : '') }]);
        });
    }

    async setLanguage() {
        try {
            const value = await AsyncStorage.getItem('language');
            if (value !== null) {
                console.log('value found ', value)
                this.props.setLanguage(value);
            } else {
                console.log('value not found')
                this.props.setLanguage('en');
                await AsyncStorage.setItem('language', 'en');
            }
        } catch (error) {
            this.props.setLanguage('en');
            await AsyncStorage.setItem('language', 'en');
        }
    }

    render() {
        const { language } = this.props
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={LoginScreen} hideNavBar={true}  initial={true} />
                    <Scene key="OTPScreen" component={OTPScreen} title={language ? language.OTP : ''} />
                    <Scene key="RegistrationScreen" component={RegistrationScreen} title={language ? language.registration : ''} />
                    <Scene key="DashboardScreen" component={DashboardScreen} title={language ? language.dashboard : ''} />
                    <Scene key="ModernTechnologyScreen" component={ModernTechnologyScreen} title={language ? language.modernTechnology : ''} />
                    <Scene key="OrganicFarmingScreen" component={OrganicFarmingScreen} title={language ? language.organicFarming : ''} />
                    <Scene key="WeatherScreen" component={WeatherScreen} title={language ? language.weather : ''} />
                    <Scene key="AgricultureDashboardScreen" component={AgricultureDashboardScreen} title={language ? language.agriculture : ''} />
<<<<<<< HEAD
                    <Scene key="TradingScreen" component={TradingScreen} title={language ? language.trading : ''} />
                    <Scene key="AddTradingScreen" component={AddTradingScreen} title={language ? language.add : 'Add'} />
                    <Scene key="procedureScreen" component={procedureScreen} title={language ? language.add : 'Procedures'} />
=======
                    <Scene key="TradingScreen" component={TradingScreen} title={language ? language.trading : ''} initial={true} />
                    <Scene key="AddTradingScreen" component={AddTradingScreen} title={language ? language.add : 'Add'} />
>>>>>>> c11a8f843435d960c77e0ee44e8e32ae7e0700ae
                </Stack>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.language,
    }
}

export default connect(mapStateToProps, actions)(Screens);