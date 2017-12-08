import { combineReducers } from 'redux';
import * as reducer from './LocationReducers';
import * as userReducer from './userReducer';
import { localizedLanguage } from './LanguageReducer';

export default combineReducers({
    countryList: reducer.countryList,
    stateList: reducer.stateList,
    cityList: reducer.cityList,
    selectedCountry: reducer.setCountry,
    selectedState: reducer.setState,
    selectedCity: reducer.setCity,
    userDetails: userReducer.setUser,
    language: localizedLanguage,
});

