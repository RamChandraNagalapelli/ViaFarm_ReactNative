export const setState = (state = null, action) => {
    const { type, payload } = action
    if (type === 'set_state' && payload) {
        return payload;
    }
    return state
}

export const setCity = (state = null, action) => {
    const { type, payload } = action
    if (type === 'set_city' && payload) {
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
    ]
}