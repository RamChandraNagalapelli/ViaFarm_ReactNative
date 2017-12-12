import { AsyncStorage } from 'react-native';

export const showIndicator = (val) => {
    return {
        type: 'show_indicator',
        payload: val,
    };
}

export const setLanguage = (language) => {
    saveLanguage(language)
    return {
        type: 'set_language',
        payload: language,
    };
}

async function saveLanguage(language) {
    try {
        console.log('\n\n','Language set to ', language, '\n\n')
        await AsyncStorage.setItem('language', language);
    } catch (error) {
        console.log('\n\n','error', error, '\n\n')
    }
}