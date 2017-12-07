

export const saveUser = (user) => {
    return {
        type: 'save_user',
        payload: user,
    };
};
