import { Scene, Router, Stack } from 'react-native-router-flux';
import React, { Component } from 'react';
import LoginScreen from '../Screens/Login/LoginScreen';
import OTPScreen from '../Screens/Login/OTPScreen';
import RegistrationScreen from '../Screens/Login/RegistrationScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import ModernTechnologyScreen from '../Screens/ModernTechnologyScreen';

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
                    <Scene key="RegistrationScreen" component={RegistrationScreen} title="Registration"/>
                    <Scene key="DashboardScreen" component={DashboardScreen} title="Dashboard" />
                    <Scene key="ModernTechnologyScreen" component={ModernTechnologyScreen} title="Modern Technology" initial = {true} />
                </Stack>
            </Router>
        )
    }
}

export default Screens;