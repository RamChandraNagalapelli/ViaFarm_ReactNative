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
        {id: 2, name: 'Karnataka', countryId: 0},
        {id: 3, name: 'Madhya Pradesh', countryId: 0},
        {id: 4, name: 'Gujarath', countryId: 0},
        {id: 5, name: 'Maharastra', countryId: 0},
    ]
}

export const cityList = () => {
    return [
        {id: 0, name: 'Hyderabad', countryId: 0, stateId: 0},
        {id: 0, name: 'Vizag', countryId: 0, stateId: 0},
        {id: 0, name: 'Vijayawada', countryId: 0, stateId: 0},
        {id: 0, name: 'Srikhakulam', countryId: 0, stateId: 0},
        {id: 0, name: 'Vijayanagaram', countryId: 0, stateId: 0},
        {id: 1, name: 'Madras', countryId: 0, stateId: 1},
        {id: 1, name: 'Madras', countryId: 0, stateId: 1},
        {id: 1, name: 'Madras', countryId: 0, stateId: 1},
        {id: 1, name: 'Madras', countryId: 0, stateId: 1},
        {id: 2, name: 'Paatna', countryId: 0, stateId: 2},
        {id: 3, name: 'Bengaloore', countryId: 0, stateId: 3},
        {id: 4, name: 'Trivendram', countryId: 0, stateId: 4},
        {id: 5, name: 'Boopal', countryId: 0, stateId: 5},
        {id: 6, name: 'Gandhinagar', countryId: 0, stateId: 6},
        {id: 7, name: 'Mumbai', countryId: 0, stateId: 7},
        {id: 8, name: 'Chandigar', countryId: 0, stateId: 8},
        {id: 9, name: 'Simla', countryId: 0, stateId: 9}
    ]
}