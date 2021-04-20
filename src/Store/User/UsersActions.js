export const login = payload => (
    {
        type: 'LOGIN',
        user: payload,
    }
);

export const logout = () => (
    {
        type: 'LOGOUT'
    }
);
