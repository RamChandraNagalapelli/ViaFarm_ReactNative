import { Scene, Router, Stack } from 'react-native-router-flux';
import React, { Component } from 'react';
import LoginScreen from '../Screens/Login/LoginScreen';
import OTPScreen from '../Screens/Login/OTPScreen';
import RegistrationScreen from '../Screens/Login/RegistrationScreen';

// const Screens = () => (
//     <Router>
//         <Stack key="root">
//         <Scene key='login' component={LoginView} title='Login' initial={!this.state.logged} />
//             <Scene key="OTPScreen" component={OTPScreen} title="OTP" />
//             <Scene key="login" component={LoginScreen} title="" />
//             <Scene key="RegistrationScreen" component={RegistrationScreen} title="Registration" />
//         </Stack>
//     </Router>
// );


class Screens extends Component {

    state = {
        logged: true
    }

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={LoginScreen} title="" initial={!this.state.logged} />
                    <Scene key="OTPScreen" component={OTPScreen} title="OTP" initial={this.state.logged} />
                    <Scene key="RegistrationScreen" component={RegistrationScreen} title="Registration" />
                </Stack>
            </Router>
        )
    }
}

export default Screens;