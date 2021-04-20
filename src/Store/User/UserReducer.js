const INITIAL_STATE = {
    token: null,
    userId:-1,
    isEnterprise: false,
    isLogged: false
};

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.user
        case 'LOGOUT':
            return{
                token: null,
                userId: -1,
                isEnterprise: false,
                isLogged: false
            }
        default:
            return state
    }
};

export default UserReducer;