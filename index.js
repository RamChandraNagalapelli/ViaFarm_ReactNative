import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import the reducer and create a store
const store = createStore(reducer)

// Pass the store into the Provider
const AppWithStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('ViaFarm', () => AppWithStore);

// Initial state of the store
const initialState = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
}

function reducer(state = initialState, action) {
    return state
}


/// npm install
//// LIBRARIES USED
// DROP_DOWN >>> npm i react-native-modal-dropdown -S
// ROUTER_FLUX >>> npm i react-native-router-flux --save
// MATERIAL_TEXTFIELD >>> npm install --save react-native-material-textfield
// REACT_REDUX >>> npm install --save react-redux
