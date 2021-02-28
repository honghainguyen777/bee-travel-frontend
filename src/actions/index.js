import axios from 'axios';
import { FETCH_USER, LOGIN, FETCH_CITIES, CITY_INIT } from './types';

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/auth/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
};

export const login = (username, password) => async dispatch => {
    const res = await axios.post('/auth/login', {username, password});
    console.log(res);
    dispatch({ type: LOGIN, payload: res.data});
};

export const fetchTop10Cities = () => async dispatch => {
    const res = await axios.get('/search/searchInit');
    dispatch({ type: CITY_INIT, payload: res.data});
};

export const fetchCities = (query) => async dispatch => {
    const res = await axios.post('/search', {query});
    dispatch({ type: FETCH_CITIES, payload: res.data});
};