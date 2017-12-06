export const setCountry = (state = null, action) => {
    const { type, payload } = action
    if (type === 'set_country') {
        return payload;
    }
    return state
}

export const setState = (state = null, action) => {
    const { type, payload } = action
    if (type === 'set_state') {
        return payload;
    }
    return state
}

export const setCity = (state = null, action) => {
    const { type, payload } = action
    if (type === 'set_city') {
        return payload;
    }
    return state
}

export const countryList = () => {
    return [
        {id: 0, name: 'India'},
        {id: 1, name: 'Sri Lanka'},
        {id: 2, name: 'Pakisthan'},
        {id: 3, name: 'Russia'},
        {id: 4, name: 'America'},
        {id: 5, name: 'England'},
        {id: 6, name: 'Butan'},
        {id: 7, name: 'Bangladesh'},
        {id: 8, name: 'Australia'},
        {id: 9, name: 'Iraqe'}
    ]
}

export const stateList = () => {
    return [
        {id: 0, name: 'Andhra Pradesh', countryId: 0},
        {id: 1, name: 'Tamil Nadu', countryId: 0},
        {id: 2, name: 'Beehar', countryId: 0},
        {id: 3, name: 'Karnataka', countryId: 0},
        {id: 4, name: 'Kerala', countryId: 0},
        {id: 5, name: 'Madhya Pradesh', countryId: 0},
        {id: 6, name: 'Gujarath', countryId: 0},
        {id: 7, name: 'Assam', countryId: 0},
        {id: 8, name: 'Haryana', countryId: 0},
        {id: 9, name: 'Himachal Pradesh', countryId: 0}
    ]
}

export const cityList = () => {
    return [
        {id: 0, name: 'Hyderabad', countryId: 0, stateId: 0},
        {id: 1, name: 'Vizag', countryId: 0, stateId: 0},
        {id: 2, name: 'Mumbai', countryId: 0, stateId: 0},
        {id: 3, name: 'Ahmedabad', countryId: 0, stateId: 0},
        {id: 4, name: 'GandiNagar', countryId: 0, stateId: 0},
        {id: 5, name: 'Bengaloore', countryId: 0, stateId: 0},
        {id: 6, name: 'New Dhelli', countryId: 0, stateId: 0},
        {id: 7, name: 'Bhuvaneswar', countryId: 0, stateId: 0},
        {id: 8, name: 'Kolkata', countryId: 0, stateId: 0},
        {id: 9, name: 'Chennai', countryId: 0, stateId: 0}
    ]
}