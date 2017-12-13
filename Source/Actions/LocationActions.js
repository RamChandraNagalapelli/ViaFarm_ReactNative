export const setState = (statelist) => {
    return {
        type: 'set_state',
        payload: statelist,
    };
};

export const setCity = (city) => {
    return {
        type: 'set_city',
        payload: city,
    };
};