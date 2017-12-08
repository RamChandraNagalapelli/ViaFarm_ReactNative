export const showIndicator = (val) => {
    return {
        type: 'show_indicator',
        payload: val,
    };
}

export const setLanguage = (language) => {
    return {
        type: 'set_language',
        payload: language,
    };
}