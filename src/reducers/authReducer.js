import { SIGNUP, LOGIN, LOGOUT, FETCH_USER } from '../actions/types';

const authReducer = (state={}, action) => {
    console.log(action);
    switch (action.type) {
        case LOGIN:
            console.log('login', action.payload.message);
            return {
                // token here later
                ...state, message: action.payload.message, isSuccessed: action.payload.success
            };
        case FETCH_USER:
            console.log('fetch user', action.payload);
            return {
                ...state, isSignedIn: true
            };
        case "OPEN_REGISTER":
            return {
                ...state, is_register_modal: true
            };
        case "CLOSE_REGISTER":
            return {
                ...state, is_register_modal: false
                };
        case "OPEN_LOGIN":
            return {
                ...state, is_login_modal: true
            };
        case "CLOSE_LOGIN":
            return {
                ...state, is_login_modal: false
                };
        default:
            return state;
    }
};

export default authReducer;