import axios from 'axios';
import { FETCH_USER, LOGIN } from './types';

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/auth/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
};

export const login = (username, password) => async dispatch => {
    const res = await axios.post('/auth/login', {username, password});
    console.log(res);
    dispatch({ type: LOGIN, payload: res.data})
};