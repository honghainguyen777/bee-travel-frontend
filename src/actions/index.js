import axios from 'axios';
import { FETCH_USER, LOGIN, FETCH_CITIES,
    CITY_INIT, OPEN_REGISTER, CLOSE_REGISTER,
    OPEN_LOGIN, CLOSE_LOGIN, SUCCESSFUL_LOGIN,
    FAIL_LOGIN, FAIL_REGISTER, FETCH_CITY,
    FETCH_7DAYS_WEATHER
} from './types';

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/auth/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
};

export const login = (username, password) => async dispatch => {
    const res = await axios.post('/auth/login', {username, password});
    if (res.data.user) {
        dispatch({ type: SUCCESSFUL_LOGIN, payload: res.data });
    } else {
        dispatch({ type: FAIL_LOGIN, payload: res.data });
    }
};

export const register = (username, password, firstName, lastName, email, confirmation) => async dispatch => {
    const res = await axios.post('/auth/signup', {username, password, firstName, lastName, email, confirmation});
    if (res.data.user) {
        dispatch({ type: SUCCESSFUL_LOGIN, payload: res.data });
    } else {
        dispatch({ type: FAIL_REGISTER, payload: res.data });
    }
};

export const openRegisterModal = () => dispatch => {
    dispatch({ type: OPEN_REGISTER});
};

export const closeRegisterModal = () => dispatch => {
    dispatch({ type: CLOSE_REGISTER});
};

export const openLoginModal = () => dispatch => {
    dispatch({ type: OPEN_LOGIN});
};

export const closeLoginModal = () => dispatch => {
    dispatch({ type: CLOSE_LOGIN});
};

export const switchModalAction = (currentModal) => dispatch => {
    if (currentModal === "login") {
        dispatch({ type: OPEN_REGISTER});
    }
    else {
        dispatch({ type: OPEN_LOGIN});
    }
};

export const fetchTop10Cities = () => async dispatch => {
    const res = await axios.get('/search/searchInit');
    dispatch({ type: CITY_INIT, payload: res.data});
};

export const fetchCities = (query) => async dispatch => {
    const res = await axios.post('/search', {query});
    dispatch({ type: FETCH_CITIES, payload: res.data});
};


// city details
export const fetchCity = (id) => async dispatch => {
    const res = await axios.get(`/details/${id}`);
    dispatch({ type: FETCH_CITY, payload: res.data});
};

export const fetch7DayForcast = (id) => async dispatch => {
    const res = await axios.get(`/details/${id}/7days`);
    dispatch({ type: FETCH_7DAYS_WEATHER, payload: res.data})
};