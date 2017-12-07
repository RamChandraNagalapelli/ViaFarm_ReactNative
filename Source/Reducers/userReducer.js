
export const setUser = (state = null, action) => {
    const { type, payload } = action;
    if (type === 'save_user') {
        return payload;
    }
    return state;
}