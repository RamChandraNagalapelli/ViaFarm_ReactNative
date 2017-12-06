export * from './usersActions';

export const setCountry = (country) => {
    return {
        type: 'set_country',
        payload: country,
    };
};

export const setState = (state) => {
    return {
        type: 'set_state',
        payload: state,
    };
};

export const setCity = (city) => {
    return {
        type: 'set_city',
        payload: city,
    };
};