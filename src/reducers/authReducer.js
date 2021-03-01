import { FETCH_USER, LOGIN, FETCH_CITIES, CITY_INIT,
    OPEN_REGISTER, CLOSE_REGISTER, OPEN_LOGIN,
    CLOSE_LOGIN, SUCCESSFUL_LOGIN, FAIL_LOGIN,
    SWITCH_MODAL
} from '../actions/types';

const authReducer = (state={}, action) => {
    console.log(action);
    switch (action.type) {
        // case LOGIN:
        //     console.log('login', action.payload.message);
        //     return {
        //         // token here later
        //         ...state, message: action.payload.message, isSuccessed: action.payload.success
        //     };
        case FETCH_USER:
            console.log('fetch user', action.payload);
            return {
                ...state, isSignedIn: true
            };
        case OPEN_REGISTER:
            return {
                ...state, is_register_modal: true, is_login_modal: false
            };
        case CLOSE_REGISTER:
            return {
                ...state, is_register_modal: false
                };
        case OPEN_LOGIN:
            return {
                ...state, is_login_modal: true, is_register_modal: false
            };
        case CLOSE_LOGIN:
            return {
                ...state, is_login_modal: false
                };
        case SUCCESSFUL_LOGIN:
            return {
                ...state, user: action.payload.user, is_login_modal: false, is_register_modal: false, messageLogin: null
            };
        case FAIL_LOGIN:
            return {
                ...state, messageLogin: action.payload.message
            };
        // case SWITCH_MODAL:
        //     return {
        //         ...state, is_login_modal: !state.is_login_modal, is_register_modal: !state.is_register_modal
        //     }
        // case SWITCH_MODAL:
        //     return {
        //         ...state, is_login_modal: !state.is_login_modal, is_register_modal: !state.is_register_modal
        //     }
        default:
            return state;
    }
};

export default authReducer;