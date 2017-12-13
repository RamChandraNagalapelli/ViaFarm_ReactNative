import { combineReducers } from 'redux';
import * as reducer from './LocationReducers';
import * as userReducer from './userReducer';
import { localizedLanguage } from './LanguageReducer';

export default combineReducers({
    stateList: reducer.stateList,
    cityList: reducer.cityList,
    userDetails: userReducer.setUser,
    language: localizedLanguage,
});

