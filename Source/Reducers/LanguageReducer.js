import * as language from '../Languages';

export const localizedLanguage = (state = null, action) => {
    const { type, payload } = action
    if (type === 'set_language') {
        return languages[payload];
    }
    return state
}

const languages = {
    'en': language.english,
    'tl': language.telugu,
}