import { Scene, Router, Stack } from 'react-native-router-flux';
import React, { Component } from 'react';
import LoginScreen from '../Screens/Login/LoginScreen';
import OTPScreen from '../Screens/Login/OTPScreen';
import RegistrationScreen from '../Screens/Login/RegistrationScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import ModernTechnologyScreen from '../Screens/ModernTechnologyScreen';
import OrganicFarmingScreen from '../Screens/OrganicFarmingScreen'
import WeatherScreen from '../Screens/WeatherScreen';
import AgricultureDashboardScreen from '../Screens/Agriculture/AgricultureDashboardScreen';

class Screens extends Component {

    state = {
        logged: true
    }

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={LoginScreen} />
                    <Scene key="OTPScreen" component={OTPScreen} title="OTP" />
                    <Scene key="RegistrationScreen" component={RegistrationScreen} title="Registration" />
                    <Scene key="DashboardScreen" component={DashboardScreen} title="Dashboard" initial = {true}/>
                    <Scene key="ModernTechnologyScreen" component={ModernTechnologyScreen} title="Modern Technology" />
                    <Scene key="OrganicFarmingScreen" component={OrganicFarmingScreen} title="Organic Farming" />
                    <Scene key="WeatherScreen" component={WeatherScreen} title="Weather" />
                    <Scene key="AgricultureDashboardScreen" component={AgricultureDashboardScreen} title="Agriculture" />
                </Stack>
            </Router>
        )
    }
}


export default Screens;