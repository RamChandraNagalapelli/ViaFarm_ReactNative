import { Scene, Router, Stack } from 'react-native-router-flux';
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import LoginScreen from '../Screens/Login/LoginScreen';
import OTPScreen from '../Screens/Login/OTPScreen';
import RegistrationScreen from '../Screens/Login/RegistrationScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import ModernTechnologyScreen from '../Screens/ModernTechnologyScreen';
import OrganicFarmingScreen from '../Screens/OrganicFarmingScreen'
import WeatherScreen from '../Screens/WeatherScreen';
import AgricultureDashboardScreen from '../Screens/Agriculture/AgricultureDashboardScreen';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { setLanguage } from '../Actions';

class Screens extends Component {

    state = {
        logged: true
    }

    componentWillMount() {
        if (!this.props.language) {
            this.props.setLanguage('en');
        }
        this.setLanguage()
    }

    async setLanguage() {
        try {
            const value = await AsyncStorage.getItem('language');
            if (value !== null) {
                this.props.setLanguage(value);
            } else {
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
                    <Scene key="login" component={LoginScreen} hideNavBar={true} initial={true} />
                    <Scene key="OTPScreen" component={OTPScreen} title={language ? language.OTP : ''} />
                    <Scene key="RegistrationScreen" component={RegistrationScreen} title={language ? language.registration : ''} />
                    <Scene key="DashboardScreen" component={DashboardScreen} title={language ? language.dashboard : ''} />
                    <Scene key="ModernTechnologyScreen" component={ModernTechnologyScreen} title={language ? language.modernTechnology : ''} />
                    <Scene key="OrganicFarmingScreen" component={OrganicFarmingScreen} title={language ? language.organicFarming : ''} />
                    <Scene key="WeatherScreen" component={WeatherScreen} title={language ? language.weather : ''} />
                    <Scene key="AgricultureDashboardScreen" component={AgricultureDashboardScreen} title={language ? language.agriculture : ''} />
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