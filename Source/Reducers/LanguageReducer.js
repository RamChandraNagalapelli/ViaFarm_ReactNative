import * as language from '../Languages'

export const localizedLanguage = (state = null, action) => {
    const { type, payload } = action
    saveLanguage(payload)
    if (type === 'set_language') {
        return languages[payload];
    }
    return state
}

async function saveLanguage(language) {
    try {
        await AsyncStorage.setItem('language', language);
    } catch (error) {}
}

const languages = {
    'en': language.english,
    'tl': language.telugu,
}