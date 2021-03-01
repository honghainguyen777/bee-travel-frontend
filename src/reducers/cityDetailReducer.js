import { FETCH_CITIES, CITY_INIT, FETCH_CITY, FETCH_7DAYS_WEATHER } from '../actions/types';

const cityDetailReducer = (state={}, action) => {
    switch (action.type) {
        case FETCH_CITY:
            console.log('FETCH_CITY', action.payload);
            const {city,summary, currentWeather, imageUrl, weatherMessage, username, currentDate} = action.payload;

            return{
                ...state, city,summary, currentWeather, imageUrl, weatherMessage, username, currentDate
            };
        case FETCH_7DAYS_WEATHER:
            console.log('FETCH_7DAYS_WEATHER', action.payload);
            const { temps7Days, message } = action.payload;
            return {
                ...state, temps7Days, message
            }; 
        default:
            return state;
    }
};

export default cityDetailReducer;
