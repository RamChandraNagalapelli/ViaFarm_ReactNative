import { combineReducers } from 'redux';
import * as reducer from './LocationReducers'

export default combineReducers({
    countryList: reducer.countryList,
    stateList: reducer.stateList,
    cityList: reducer.cityList,
    selectedCountry: reducer.setCountry,
    selectedState: reducer.setState,
    selectedCity: reducer.setCity,
});

