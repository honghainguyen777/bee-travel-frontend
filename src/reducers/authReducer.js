import { SIGNUP, LOGIN, LOGOUT, FETCH_USER } from '../actions/types';

const authReducer = (state={}, action) => {
    console.log(action);
    switch (action.type) {
        case LOGIN:
            console.log('login', action.payload);
            return {
                ...state, isSignedIn: true, user: action.payload
            };
        case FETCH_USER:
            console.log('fetch user', action.payload);
            return {
                ...state, isSignedIn: true
            };
        default:
            return state;
    }
};

export default authReducer;